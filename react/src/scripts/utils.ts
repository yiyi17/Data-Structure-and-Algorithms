import _ from 'lodash';

export function removeEmptyField(obj: { [key: string]: any }) {
  const newObj:any={};
  const cloneObj = _.cloneDeep(obj);
  if (cloneObj instanceof Object) {
    for (const attr in cloneObj) {
      if (
        cloneObj.hasOwnProperty(attr) &&
        cloneObj[attr] !== '' &&
        cloneObj[attr] !== null &&
        cloneObj[attr] !== undefined
      ) {
        if (cloneObj[attr] instanceof Object) {
          newObj[attr] = removeEmptyField(cloneObj[attr]);
        } else if (
          typeof cloneObj[attr] === 'string' &&
          ((cloneObj[attr].indexOf('{') > -1 &&
            cloneObj[attr].indexOf('}') > -1) ||
            (cloneObj[attr].indexOf('[') > -1 &&
              cloneObj[attr].indexOf(']') > -1))
        ) {
          try {
            const attrObj = JSON.parse(cloneObj[attr]);
            if (attrObj instanceof Object) {
              newObj[attr] = removeEmptyField(attrObj);
            }
          } catch (e) {
            newObj[attr] = cloneObj[attr];
          }
        } else {
          newObj[attr] = cloneObj[attr];
        }
      }
    }
  }
  return newObj;
}

export function monthTomillisecond(num: number): number {
  return num * 24 * 3600 * 1000;
}

/**
 * 请求分页数据
 */
export function makeProTableRequest(
  request: (params: any) => any,
  getTableData: (res: Array<any>) => void,
) {
  // 下面这个函数的定义详情见：https://procomponents.ant.design/components/table#request
  const proTableRequest = async (params: any) => {
    const { current, pageSize, ...searchParams } = params;

    // 根据 proTableRequest 提供的参数信息定制成自己的业务接口需要的参数
    // TODO: removeEmptyField() 会把数组转成形如 {0: xxx} 的对象
    const res = await request(
      removeEmptyField({
        page: current,
        pageSize,
        ...searchParams,
      }),
    );

    if (getTableData) {
      getTableData(res?.list || []);
    }

    // 根据自己的业务接口返回定制成 proTableRequest 要求的返回结果
    return {
      data: res?.list ?? [], // 接口返回的分页数据
      total: res?.total ?? 0, // 接口返回的分页总条数
    };
  };

  return proTableRequest;
}
