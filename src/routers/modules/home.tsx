import LayoutIndex from "@/layouts";
import { RouteObject } from "../interface";
import Home from '@v/home/index'


const homeRouter: RouteObject[] = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/home/index',
        element: <Home />
      }
    ]
  }
]

export default homeRouter