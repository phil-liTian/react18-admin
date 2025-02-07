import * as types from '../../mutation-types'

export const updateCollapse = (isCollapse: boolean) => ({
  type: types.UPDATE_COLLAPSE,
  isCollapse
})
