import { MenuState } from "@/redux/interface"
import { produce } from "immer";
import { AnyAction } from "redux";
import * as types from '../../mutation-types'


const menuState: MenuState = {
	isCollapse: false,
	menuList: []
}

const menu = (state: MenuState = menuState, action: AnyAction) => produce(state, draftState => {
  switch (action.type) {
    case types.UPDATE_COLLAPSE:
      draftState.isCollapse = !draftState.isCollapse
      break;
    case types.SET_MENU_LIST:
      draftState.menuList = action.menuList
      break;
    default:
      return draftState;
  }
})

export default menu
