import { useLocation } from 'react-router-dom'
import store from "@/redux"
import { searchRoute } from '@/utils/util'
import { routerArray } from '@/routers'

const useAuthButtons = () => {
  const { pathname } = useLocation()
  const { authButtons } = store.getState().auth
  const router = searchRoute(pathname, routerArray)
  
  return {
    BUTTONS: authButtons[router.meta?.key!] || {}
  }
}

export default useAuthButtons
