import { HashRouter } from 'react-router-dom'
import { useTheme } from "@h/index";
import Router from '@r/index'
import { connect } from 'react-redux';
function App(props: any) {
  const { themeConfig } = props

  useTheme(themeConfig)

  return (
    <HashRouter>
      <Router />
    </HashRouter>
  )
}


const mapStateToProps = (state) => state.global
export default connect(mapStateToProps)(App)
