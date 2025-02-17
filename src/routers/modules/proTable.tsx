import React from 'react'
import { LayoutIndex } from '../constant'
import { RouteObject } from '../interface'
import LazyLoad from '../utils/lazyLoad'

const proTableRouter: RouteObject[] = [
  {
    element: <LayoutIndex />,
    meta: {
      title: '超级表格'
    },
    children: [
      {
        path: '/proTable/useHooks',
        element: LazyLoad(React.lazy(() => import('@/views/proTable/useHooks/index'))),
        meta: {
          requiresAuth: true,
          title: '使用 Hooks',
          key: 'useHooks'
        }
      },
      {
        path: '/proTable/useComponent',
        element: LazyLoad(React.lazy(() => import('@/views/proTable/useComponent/index'))),
        meta: {
          requiresAuth: true,
          title: '使用 Component'
        }
      }
    ]
  }
]

export default proTableRouter
