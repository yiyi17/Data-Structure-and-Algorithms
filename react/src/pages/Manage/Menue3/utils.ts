
const makeListData = function (
  request: (params: any) => any,
  getTableData?: (res: Array<any>) => void,
) {
  const proTableRequest = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
    let restParams = Object.entries(params).filter(
      (item) => !['current', 'pageSize'].includes(item[0]),
    );
    let finalParams = {};
    if (restParams?.length !== 0) {
      restParams?.forEach((item: any) => {
        finalParams = Object.assign(finalParams, { [item[0]]: item[1] });
      });
    }
    const res = await request(finalParams);

    if (getTableData) {
      getTableData(res?.list || res || []);
    }

    return {
      data: (res?.list || res) ?? [], // 接口返回的分页数据
      total: res?.total ?? 0, // 接口返回的分页总条数
    };
  };
  return proTableRequest;
};
export { makeListData };
