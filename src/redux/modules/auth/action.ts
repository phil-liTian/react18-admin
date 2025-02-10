import * as types from '../../mutation-types'

export const setAuthRouter = (authRouter: any) => {
  return {
    type: types.SET_AUTH_ROUTER,
    authRouter
  }
}

export const setAuthButtons = (authButtons: any) => {
  return {
    type: types.SET_AUTH_BUTTONS,
    authButtons
  }
}
