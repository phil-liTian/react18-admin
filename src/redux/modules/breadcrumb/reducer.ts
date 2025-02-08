import { produce } from "immer";
import { BreadcrumbState } from "@/redux/interface";
import * as types from "@/redux/mutation-types";

const breadcrumbState: BreadcrumbState = {
  breadcrumbList: []
}

const breadcrumb = (state: BreadcrumbState = breadcrumbState, action) => produce(state, draftState => {
  switch (action.type) {
    case types.SET_BREADCRUMB_LIST:
      console.log('action-->', action);
      
      draftState.breadcrumbList = action.breadcrumbList
      break;
  
    default:
      return draftState
  }
})

export default breadcrumb;
