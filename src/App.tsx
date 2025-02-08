import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { useTheme } from "@h/index";
import Router from '@r/index'
import { connect } from 'react-redux';
function App(props: any) {
  const { themeConfig, assemblySize } = props

  useTheme(themeConfig)

  return (
    <HashRouter>
      <ConfigProvider componentSize={assemblySize}>
        <Router />
      </ConfigProvider>
    </HashRouter>
  )
}

const mapStateToProps = (state) => state.global
export default connect(mapStateToProps)(App)
