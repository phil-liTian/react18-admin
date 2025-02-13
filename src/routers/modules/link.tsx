import { LayoutIndex } from "../constant";
import { RouteObject } from "../interface";
import LazyLoad from "../utils/lazyLoad";
import React from "react";

const linkRouter: RouteObject[] = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/link/github',
        element: LazyLoad(React.lazy(() => import('@/views/link/github'))),
        meta: {
          title: 'Github 仓库',
        }
      }
    ]
  }
]

export default linkRouter