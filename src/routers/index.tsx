import { useRoutes, Navigate } from "react-router-dom";
import { RouteObject } from "./interface/index";
import Login from '@v/login/index'

const metaRouter = import.meta.glob('./modules/*.tsx', { eager: true, import: 'default' })


export const routerArray: RouteObject[] = []
Object.keys(metaRouter).forEach(item => {
  routerArray.push(...(metaRouter[item] as any))
})

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/login' />
  },
  ...routerArray,
  {
    path: "/login",
    element: <Login />
  }
]

const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router