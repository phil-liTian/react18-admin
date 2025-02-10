import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { getAuthButtons } from '@api/modules/login'
import { setAuthButtons } from '@/redux/modules/auth/action'
import LayoutMenu from './components/Menu/index'
import LayoutHeader from './components/Header/index'
import LayoutFooter from './components/Footer'
import LayoutTabs from './components/Tabs'
import './index.less'
import { useEffect } from 'react'

const LayoutIndex = (props) => {
  const { isCollapse, setAuthButtons } = props
  const { Sider, Content } = Layout

  const getAuthButtonList = async () => {
    const { data } = await getAuthButtons()
    setAuthButtons(data)
  }

  useEffect(() => {
    getAuthButtonList()
  }, [])

  return (
    // <section className='container'>
    <Layout className='container'>
      <Sider theme='dark' collapsed={isCollapse} width={220}>
        <LayoutMenu />
      </Sider>

      <Layout>
        <LayoutHeader />
        <LayoutTabs />
        <Content>
          <Outlet />
        </Content>
        <LayoutFooter />
      </Layout>
    </Layout>

    // </section>
  )
}

const mapStateToProps = (state: any) => state.menu
const mapDispatchToProps = { setAuthButtons }
export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex)
