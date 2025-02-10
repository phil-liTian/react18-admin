import { produce } from 'immer'
import { HOME_URL } from "@/config/config"
import { TabsState } from "@/redux/interface"
import * as types from '../../mutation-types'

const tabsState: TabsState = {
  tabsList: [{ title: '首页', path: HOME_URL }],
  tabsActive: HOME_URL
}

const tabs = (state: TabsState = tabsState, action: any ) => produce(state, draftState => {
  switch (action.type) {
    case types.SET_TABS_LIST:
      draftState.tabsList = action.tabsList
      break;
    case types.SET_TABS_ACTIVE:
      draftState.tabsActive = action.tabsActive
      break;
    default:
      return draftState
  }
})

export default tabs