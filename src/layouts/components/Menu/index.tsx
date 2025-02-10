import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Menu, MenuProps, Spin } from 'antd'
import * as Icons from '@ant-design/icons'
import { getMenuList } from '@api/modules/login'
import { setBreadcrumbList } from '@/redux/modules/breadcrumb/action'
import { setAuthRouter } from '@/redux/modules/auth/action'
import { findAllBreadcrumb, handleRouter } from '@u/util'
import Logo from './components/Logo'
import './index.less'

const LayoutMenu: React.FC = (props: any) => {
  const { setBreadcrumbList, setAuthRouter } = props
  type MenuItem = Required<MenuProps>['items'][number]
  const navigate = useNavigate()

  const [menuList, setMenuList] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(false)

  const getItem = (label: React.ReactNode, key?: React.Key | null, icon?: React.ReactNode, children?: MenuItem[], type?: "group"): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
      type
    } as MenuItem
  }

  const customIcons: { [key: string]: any } = Icons

  // 动态渲染Icon图标
  const addIcon = (name: string) => {
    return React.createElement(customIcons[name])
  }

  const deepLoopFloat = (menuList: Menu.MenuOptions[], newArr: MenuItem[] = []) => {
    menuList.forEach((item: Menu.MenuOptions) => {
      if (!item?.children?.length) return newArr.push(getItem(item.title, item.path, addIcon(item.icon!)))
      newArr.push(getItem(item.title, item.path, addIcon(item.icon!), deepLoopFloat(item.children)))
    })

    return newArr
  }

  const getMenuData = async () => {
    try {
      const { data }  = await getMenuList()
      if ( !data ) return
      // 处理菜单
      setMenuList(deepLoopFloat(data))
      // 处理面包屑
      setBreadcrumbList(findAllBreadcrumb(data))
      // 处理菜单权限 将返回的菜单处理成一维数组
      const dynamicMenuList = handleRouter(data)  
      setAuthRouter(dynamicMenuList)
      
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMenuData()
  }, [])

  const clickMenu = ({ key }) => {
    navigate(key)
  }

  return <div className="menu">
    <Spin spinning={loading} tip="Loading...">
      <Logo />
      <Menu 
        theme='dark'
        mode='inline'
        onClick={clickMenu}
        items={menuList} />
    </Spin>
  </div>
}

const mapDispatchToProps = { setBreadcrumbList, setAuthRouter }
export default connect(null, mapDispatchToProps)(LayoutMenu)
