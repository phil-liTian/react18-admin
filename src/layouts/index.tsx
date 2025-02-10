import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import LayoutMenu from './components/Menu/index'
import LayoutHeader from './components/Header/index'
import LayoutFooter from './components/Footer'
import LayoutTabs from './components/Tabs'
import './index.less'

const LayoutIndex = (props) => {
  const { isCollapse } = props
  const { Sider, Content } = Layout
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
export default connect(mapStateToProps)(LayoutIndex)
