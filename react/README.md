# pv 平台

## 启动指引

### 安装依赖

```
yarn
```

### 运行

```
yarn start
```

### 构建

```
yarn build
```

### 部署

走标准 CI/CD 流程，构建产物直接可用

## 开发指引

### 技术栈

- ant-design / pro-components
- umijs3
- ahooks2，主要用的 useRequest。因为存在 breaking-change，该依赖**不能**升级为 v3。
- hox
- 内部组件库：@fe/usc

### 项目模块与结构

参照路由配置（config/routes.ts），尽可能做到 url 路径和文件路径一致

```
src/page/
├── Guide // 未使用
│   ├── Container
│   ├── Overview
│   └── Question
├── Manage // 埋点管理一级菜单
│   ├── Audit // 审批管理
│   ├── Authority // 权限管理
│   ├── Demand // *需求管理*
│   ├── Module // *模块管理*
│   ├── Page // 页面管理
│   └── Semantic // 语义管理
├── Test // 测试工具一级菜单
│   ├── Create
│   ├── Detail
│   ├── Form
│   ├── List
│   ├── Report
│   ├── TemporaryTest
│   └── WorkBench
└── components
    └── Semantic // 语义的相关重型页面组件，在多个页面中使用到
```

### 全局配置及常用依赖

- 网络请求
  - 使用 umi-request 作为请求库，ahooks _v2_ 的 `useRequest` hooks 作为异步管理工具，配合请求库使用。
  - 相关配置和拦截器写在 `src/init/request.ts`，其中提供了鉴权字段插入和错误通用处理逻辑，以及 mock 能力（不太使用）。
- 状态管理
  - 使用 `hox` 作为存储全局状态和配置的工具库。可见 `src/models/` 目录下的各文件。
  - 简单来说就是某 hooks 在 export 时，用 `createModel()` 包一层，即可转变为单例模式，所有引入方访问的是同一个 hooks 及其状态。
- 工具函数
  - 在 `src/scripts/` 目录下，按能力封装了一些业务工具函数。如果有需要添加，请注意写好注释。
    - 其中，updateLog 是更新日志的数据，格式可以参考已有数据。
- Others
  - lodash 函数库
  - day.js 日期时间库
  - classnames DOM className 工具库
