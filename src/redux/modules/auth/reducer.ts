import { AuthState } from "@/redux/interface";
import { produce } from "immer";
import * as types from "@/redux/mutation-types";

const authState: AuthState = {
  authRouter: [],
  authButtons: {}
}


const auth = (state: AuthState = authState, action: any) => produce(state, draftState => {
  switch (action.type) {
    case types.SET_AUTH_ROUTER:
      draftState.authRouter = action.authRouter
      break;
    case types.SET_AUTH_BUTTONS:
      draftState.authButtons = action.authButtons
      break
    default:
      return draftState
  }
})

export default auth
