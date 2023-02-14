import { useRequest } from '@umijs/max';

import { createModel } from 'hox';

export interface UserInfo {
  name: string;
  avatar: string;
  role: string;
}

function UseInfo() {
  const { data, run } = useRequest(
    {
      url: '/api/v1/profile',
      mock: false,
    },
    {
      manual: true,
    },
  );

  return {
    userInfo: data,
    updateUserInfo: run,
  };
}

export default createModel(UseInfo);
