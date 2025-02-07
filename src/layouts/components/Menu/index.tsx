import React, { useEffect, useState } from 'react'
import { Menu, MenuProps, Spin } from 'antd'
import * as Icons from '@ant-design/icons'
import { getMenuList } from '@api/modules/login'
import Logo from './components/Logo'
import './index.less'

const LayoutMenu: React.FC = () => {
  type MenuItem = Required<MenuProps>['items'][number]

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
      setMenuList(deepLoopFloat(data))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMenuData()
  }, [])

  return <div className="menu">
    <Spin spinning={loading} tip="Loading...">
      <Logo />
      <Menu 
        theme='dark'
        mode='inline'
        items={menuList} />
    </Spin>
  </div>
}

export default LayoutMenu