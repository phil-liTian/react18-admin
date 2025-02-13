## react18-admin

### 项目规范
```js
{
  feat: "添加新功能"
  fix: "修复 Bug"
  chore: "一些不影响功能的更改"
  docs: "专指文档的修改"
  perf: "性能方面的优化"
  refactor: "代码重构"
  test: "添加一些测试代码等等"
}
```

### 项目功能

- 🚀 采用最新技术找开发：React18、React-Router v7、React-Hooks、TypeScript、Vite6、vitest
- 🚀 采用 Vite6 作为项目开发、打包工具（配置了 Gzip 打包、跨域代理、打包预览工具……）
- 🚀 整个项目集成了 TypeScript
- 🚀 使用 redux 做状态管理，集成 immer、react-redux、redux-persist 开发
- 🚀 集成了两套状态管理，master 分支使用的是 redux || redux-toolkit 分支使用的是 redux-toolkit
- 🚀 使用 TypeScript 对 Axios 整个二次封装 （全局错误拦截、常用请求封装、全局请求 Loading、取消重复请求……）
- 🚀 支持 Antd 组件大小切换、灰色 && 色弱模式、i18n 国际化（i18n 暂时没配置所有文件，根据项目自行配置）
- 🚀 使用 自定义高阶组件 进行路由权限拦截（403 页面）、页面按钮权限配置
- 🚀 支持 React-Router v7 路由懒加载配置、菜单手风琴模式、无限级菜单、多标签页、面包屑导航
- 🚀 使用 Prettier 统一格式化代码，集成 Eslint、Stylelint 代码校验规范（项目规范配置）
- 🚀 使用 husky、lint-staged、commitlint、commitizen、cz-git 规范提交信息（项目规范配置）
