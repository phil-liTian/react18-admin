import { RouteObject } from "../interface";
import DataScreen from "@/views/dataScreen";

const dataScreenRouter: RouteObject[] = [
  {
    path: '/dataScreen/index',
    element: <DataScreen />,
    meta: {
      title: '数据大屏'
    }
  }
]

export default dataScreenRouter
