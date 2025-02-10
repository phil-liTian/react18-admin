import React from "react";
import { RouteObject } from "../interface";
import LazyLoad from "../utils/lazyLoad";

const errorRouter: RouteObject[] = [
  {
    path: '/403',
    element: LazyLoad(React.lazy(() => import('@c/ErrorMessage/403'))),
    meta: {
      requiresAuth: true,
      title: '403页面',
    }
  },
  {
    path: '/404',
    element: LazyLoad(React.lazy(() => import('@c/ErrorMessage/404'))),
    meta: {
      requiresAuth: true,
      title: '404页面',
    }
  },
  {
    path: '/500',
    element: LazyLoad(React.lazy(() => import('@c/ErrorMessage/500'))),
    meta: {
      requiresAuth: true,
      title: '500页面',
    }
  }
]


export default errorRouter;
