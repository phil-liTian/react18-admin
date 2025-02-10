import * as types from '../../mutation-types'

export const setTabsActive = (tabsActive: string) => {
  return {
    type: types.SET_TABS_ACTIVE,
    tabsActive
  }
}

export const setTabsList = (tabsList: any) => {
  return {
    type: types.SET_TABS_LIST,
    tabsList
  }
}