import { useLocation, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '@/redux'
import { rootRouter } from '../index'
import { searchRoute } from '@u/util'
import { HOME_URL } from '@/config/config'
import { axiosCanceler } from '@api/helper/axiosCancel'

const AuthRouter = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation()
  const { authRouter } = store.getState().auth
  const route = searchRoute(pathname, rootRouter)
  // * 在跳转路由之前，清除所有的请求
  axiosCanceler.removeAllPending()
  // 无需权限 直接放行
  if ( !route?.meta?.requiresAuth ) return props.children

  const staticRouter = [HOME_URL, '/403']
  const routerList = authRouter.concat(staticRouter)
  if ( !routerList.includes(pathname) ) return <Navigate to='/403' />

  // 如果账号有权限 则正常返回页面内容
  return props.children
}

const mapStateToProps = state => state.auth
export default connect(mapStateToProps)(AuthRouter)
