import { LayoutIndex } from "../constant";
import { RouteObject } from "../interface";
import DataVisualize from '@v/dashboard/dataVisualize'
import Embedded from "@v/dashboard/embedded";

const dashBoardRouter: RouteObject[] = [
  {
    element: <LayoutIndex />,
    meta: {
      title: 'Dashboard'
    },
    children: [
      {
        path: '/dashboard/dataVisualize',
        element: <DataVisualize />,
        meta: {
          title: 'Dashboard',
          key: 'dashboard'
        }
      },
      {
        path: '/dashboard/embedded',
        element: <Embedded />,
        meta: {
          title: 'Embedded',
          key: 'embedded'
        }
      }
    ]
  }
]

export default dashBoardRouter