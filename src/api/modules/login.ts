import http from '../index'
import { Login, Menu } from '../interface/index'
import { PORT1 } from '../config/servicePort'

export const LoginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(`${PORT1}/login`, params)
}

export const getMenuList = () => {
  return http.get<Menu.MenuOptions>(`${PORT1}/menu/list`)
}
