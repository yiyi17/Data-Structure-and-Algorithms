import {
  ControlOutlined,
  TeamOutlined,
  UnlockOutlined,
} from '@ant-design/icons';

// path 要和真是的路由匹配对应上
// name 是 menue 的名称,且会和面包屑相关
export default {
  route: {
    routes: [
      {
        path: '/nav1',
        name: 'nav1',
        routes: [
          {
            path: '/nav1/menue2',
            name: '管理2',
            icon: <ControlOutlined />,
            routes: [
              {
                path: '/nav1/menue2/menue3',
                name: '管理3',
              },
             
            ],
          },
          {
            path: '/nav1/menue4',
            name: '管理4',
            icon: <TeamOutlined />,
          },
          {
            path: '/nav1/authority',
            name: '权限管理',
            icon: <UnlockOutlined />,
            authority: 'ROLE_ADMIN',
          },
        ],
      },
      {
        path: '/nav2',
        name: 'nav2',
        routes: [
          {
            path: '/nav2/list',
            name: 'list',
            hideInMenu: true,
          },
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
};
