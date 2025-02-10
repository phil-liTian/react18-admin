import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Tabs, message } from 'antd'
import { HomeFilled } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router-dom'
import MoreButton from './components/MoreButton'
import { setTabsList } from '@/redux/modules/tabs/actions'
import { routerArray } from '@/routers/index'
import { searchRoute } from '@/utils/util'
import { HOME_URL } from '@/config/config'
import './index.less'

const LayoutTabs = (props: any) => {
  const { tabsList } = props.tabs
  const { themeConfig } = props.global
  const { TabPane } = Tabs
  const { setTabsList } = props
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [activeValue, setActiveValue] = useState(pathname)

  const addTabs = () => {
    let newTabsList = JSON.parse(JSON.stringify(tabsList))
    const route = searchRoute(pathname, routerArray)
    if (tabsList.every(item => item.path !== route.path)) {
      newTabsList.push({ title: route?.meta?.title, path: route.path })
    }
    setTabsList(newTabsList)
    setActiveValue(pathname)
  }

  const delTabs = (tabPath?: string) => {
    if (tabPath === HOME_URL) return
    if (pathname === tabPath) {
      tabsList.forEach((item, index) => {
        if (item.path !== pathname) return
        const nextTab = tabsList[index + 1] || tabsList[index - 1]
        if (!nextTab) return
        navigate(nextTab.path)
      })
    }

    message.success("你删除了Tabs标签 😆😆😆");
    setTabsList(tabsList.filter(item => item.path !== tabPath))
  }

  const clickTabs = (path: string) => {
    navigate(path)
  }

  useEffect(() => {
    addTabs()
  }, [pathname])

  return <>
    {
      themeConfig.tabs && <div className='tabs'>
        <Tabs
          animated
          hideAdd
          onChange={clickTabs}
          type="editable-card"
          onEdit={path => delTabs(path as string)}
          activeKey={activeValue}>
          {tabsList.map(item => {
            return <TabPane
              key={item.path}
              tab={<span> {item.path === HOME_URL ? <HomeFilled /> : ''} {item.title}</span>}
              closable={item.path !== HOME_URL} />
          })}
        </Tabs>
        <MoreButton delTabs={delTabs} setTabsList={setTabsList} tabsList={tabsList} />
      </div>
    }
  </>
}

const mapStateToProps = state => state
const mapDispatchToProps = { setTabsList }
export default connect(mapStateToProps, mapDispatchToProps)(LayoutTabs)
