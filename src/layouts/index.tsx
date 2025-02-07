import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import LayoutMenu from './components/Menu/index'
import LayoutHeader from './components/Header/index'
import LayoutFooter from './components/Footer'
import LayoutTabs from './components/Tabs'
import './index.less'

const LayoutIndex = () => {
  const { Sider, Content } = Layout
  return (
    // <section className='container'>
    <Layout className='container'>
      <Sider theme='dark' width={220}>
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

export default LayoutIndex
