import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import LayoutMenu from './components/Menu/index'

const LayoutIndex = () => {
  const { Sider, Content } = Layout
  return (
    <section className='container'>
      <Sider>
        <LayoutMenu />
      </Sider>

      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </section>
  )
}

export default LayoutIndex
