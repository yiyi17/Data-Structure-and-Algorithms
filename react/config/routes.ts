// 404 不生效
const routes: any[] = [
  {
    name: '登录',
    path: '/login',
    component: './login',
    hideInMenu: true,
  },
  {
    path: '/',
    component: '@/layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '@/layouts/BasicLayout',
        routes: [
          {
            path: '/',
            redirect: '/nav1/home',
          },
          {
            path: '/nav1',
            name: 'nav1',
            routes: [
              {
                path: '/nav1',
                redirect: '/nav1/home',
              },
              {
                path: '/nav1/home',
                name: '首页',
                routes: [
                  {
                    path: '/nav1/home',
                    component: './Home',
                  },
                ],
              },
              {
                path: '/nav1/menue2',
                name: '管理2',
                routes: [
                  {
                    path: '/nav1/menue2',
                    redirect: '/nav1/menue2/menue3',
                  },
                  {
                    path: '/nav1/menue2/menue3',
                    component: './Manage/Menue3',
                  },
                ],
              },
              {
                path: '/nav1/menue4',
                name: '管理4',
                routes: [
                  {
                    path: '/nav1/menue4',
                    component: './Manage/Menu4/List',
                  },
                ],
              },
              {
                path: '/nav1/authority',
                name: '权限管理',
                component: './Manage/Authority',
                authority: 'ROLE_ADMIN',
              },
              {
                path: '/nav1/demo',
                name: 'Demo',
                component: './Manage/Authority',
                authority: 'ROLE_ADMIN',
              },
              {
                component: './404',
              },
            ],
          },
          {
            path: '/nav2',
            name: 'nav2',
            routes: [
              {
                path: '/nav2',
                redirect: '/nav2/list',
              },
              {
                name: 'nav2',
                path: '/nav2/list',
                component: './Nav2/List',
                hideInMenu: true,
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];

export default routes;
