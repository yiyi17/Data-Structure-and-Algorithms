import UserInfo from '@/models/useUserInfo';
import React, { FC, ReactNode } from 'react';
import check from './CheckPermissions';

interface AuthorizedPorps {
  authority: string | string[];
  noMatch?: ReactNode;
  children: ReactNode;
}

type IAuthorizedType = React.FunctionComponent<AuthorizedPorps> & {
  check: typeof check;
};

const Authorized: FC<AuthorizedPorps> = ({
  authority,
  noMatch = null,
  children,
}) => {
  const {
    userInfo: { role },
  } = UserInfo();

  const childrenRender: React.ReactNode =
    typeof children === 'undefined' ? null : children;
  const dom = check(authority, role, childrenRender, noMatch);
  return <>{dom}</>;
};

export default Authorized as IAuthorizedType;
