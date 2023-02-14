import check from '@/components/Authorized/CheckPermissions';
import UserInfo from '@/models/useUserInfo';
// import { Product, ZaSDKVersion } from '@/constants';
import { ProLayout } from '@ant-design/pro-components';
import { history, NavLink, Outlet, useLocation } from '@umijs/max';
// import { ZAProvider } from 'za-react';
import settings from '../../../config/defaultSettings';
import Footer from './Footer';
import RightContent from './Header/Right';
import logo from './logo.svg';
import defaultProps from './_defaultProps';

export default () => {
  const location = useLocation();
  const {
    userInfo: { 
      role, 
      // id
     },
  } = UserInfo();

  const checkAuth = (allRoutes: any[]) => {
    //递归剔除由于权限不符合不能展示的菜单项
    return allRoutes.filter((item: any) => {
      const {
        routes,
        authority = 'ROLE_USER',
      }: { routes: []; authority: string } = item;
      if (routes && routes.length !== 0) {
        item.routes = checkAuth(routes);
        return item;
      }
      const res = check<boolean, boolean>(
        authority || 'ROLE_USER',
        role,
        true,
        false,
      );
      
      return res;
    });
  };
  checkAuth(defaultProps.route.routes);

  return (
    // <ZAProvider
    //   sdkVersion={ZaSDKVersion}
    //   sdkOptions={{
    //     product: Product,
    //     memberHashId: id,
    //     apiHost: 'https://datahub.xx.com',
    //     apiPath: '/collector/operation',
    //   }}
    // >
      <ProLayout
        logo={logo}
        {...defaultProps}
        location={{
          pathname: location.pathname,
        }}
        onMenuHeaderClick={() => history.push('/nav1/home')}
        menuItemRender={(item, dom) => (
          <NavLink to={item.path || '/nav1/home'}>{dom}</NavLink>
        )}
        rightContentRender={() => <RightContent />}
        {...settings}
        footerRender={() => <Footer />}
      >
        <Outlet />
      </ProLayout>
    // </ZAProvider>
  );
};
