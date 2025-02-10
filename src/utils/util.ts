import { RouteObject } from "@/routers/interface"


const getBreadcrumbList = (path: string, menuList: Menu.MenuOptions[]) => {
  let tempPath: any[] = []

  try {
    const getNodePath = (node: Menu.MenuOptions) => {
      tempPath.push(node)
      // 找到符合条件的节点, 通过throw终止递归

      if ( node.path === path ) {
        throw new Error('GOT IT')
      }

      if ( node.children?.length ) {
        for (let i = 0; i < node.children.length; i++) {
          getNodePath(node.children[i])
        }
        // 当前结点的子节点遍历完仍然没有找到, 则删除该结点
        tempPath.pop()
      } else {
        // 找到叶子结点 仍然没有找到 则弹出
        tempPath.pop()
      }
    }
    for (let i = 0; i < menuList.length; i++) {
      getNodePath(menuList[i])
    }
  } catch (error) {
    return tempPath.map(v => v.title)
  }
}

/**
 * @description 双重递归 找出所有面包屑, 存到redux中, 就不用每次都去递归查找了
 * menuList: 当前菜单列表
 * 返回一个对象 key是当前激活的路径，value是当前路径的父级路径
 */
export const findAllBreadcrumb = (menuList: Menu.MenuOptions[]): { [key: string]: any } => {
  let allBreadcrumbList: { [key: string]: any } = {};
  const loop = (menuItem: Menu.MenuOptions) => {
    if ( menuItem.children?.length ) {
      menuItem.children.forEach(child=> loop(child))
    } else {
      allBreadcrumbList[menuItem.path] = getBreadcrumbList(menuItem.path, menuList)
    }
  }

  menuList.forEach(item => loop(item))
  return allBreadcrumbList;
}

// 匹配当前路由信息
export const searchRoute = (path: string, routes: RouteObject[] = []) => {
  let result: RouteObject = {}
  for (let item of routes) {
    if (item.path === path) return item
    if (item.children) {
      const res = searchRoute(path, item.children)
      if (Object.keys(res).length) result = res
    }
  }
  return result
}