const users = [
  { name: 'Umi', nickName: 'U', gender: 'MALE' },
  { name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

export default {
  'api/v1/login': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  // 更新人员权限
  'PUT /api/v1/update_role': (req: any, res: any) => {
    res.json({
      isSuccess: true,
      errorCode: 0,
    });
  },
  // 人员权限的列表
  'GET /api/v1/user_list': (req: any, res: any) => {
    res.json({
      isSuccess: true,
      errorCode: 0,
      data: [
        {
          avatar:
            'x',
          display: 'cx',
          email: 'x@.com',
          id: 1,
          name: 'cx',
          role: 'ROLE_ADMIN',
          userId: 'll',
        },
      ],
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  // 人员信息
  'GET /api/v1/profile': (req: any, res: any) => {
    res.json({
      isSuccess: true,
      message: '请求成功',
      data: {
        avatar: 'xx',
        id: 'xxx',
        display: 'xxx',
        email: 'xxx@xxx.com',
        name: 'xxx',
        role: 'ROLE_ADMIN',
      },
    });
  },
};
