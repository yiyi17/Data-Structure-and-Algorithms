 import { message, notification } from 'antd';
 import type { RequestConfig } from '@umijs/max';
 
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const codeMessage = {
   200: '服务器成功返回请求的数据。',
   201: '新建或修改数据成功。',
   202: '一个请求已经进入后台排队（异步任务）。',
   204: '删除数据成功。',
   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
   401: '用户没有权限（令牌、用户名、密码错误）。',
   403: '用户得到授权，但是访问是被禁止的。',
   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
   406: '请求的格式不可得。',
   410: '请求的资源被永久删除，且不会再得到的。',
   422: '当创建一个对象时，发生一个验证错误。',
   500: '服务器发生错误，请检查服务器。',
   502: '网关错误。',
   503: '服务不可用，服务器暂时过载或维护。',
   504: '网关超时。',
 };
 
 // 错误处理方案： 错误类型
 enum ErrorShowType {
   SILENT = 0,
   WARN_MESSAGE = 1,
   ERROR_MESSAGE = 2,
   NOTIFICATION = 3,
   REDIRECT = 9,
 }
 
 // 与后端约定的响应数据格式
 interface ResponseStructure {
   success: boolean;
   data: any;
   errorCode?: number;
   errorMessage?: string;
   showType?: ErrorShowType;
 }
 
 /**
  * 异常处理程序
  */
 
 const errorHandler = (error: any, opts: any) => {
   console.log('errorHandler',error);
   
   if (opts?.skipErrorHandler) throw error;
   // 我们的 errorThrower 抛出的错误。
   if (error.name === 'BizError') {
     const errorInfo: ResponseStructure | undefined = error.info;
     if (errorInfo) {
       const { errorMessage, errorCode } = errorInfo;
       switch (errorInfo.showType) {
         case ErrorShowType.SILENT:
           // do nothing
           break;
         case ErrorShowType.WARN_MESSAGE:
           message.warn(errorMessage);
           break;
         case ErrorShowType.ERROR_MESSAGE:
           message.error(errorMessage);
           break;
         case ErrorShowType.NOTIFICATION:
           notification.open({
             description: errorMessage,
             message: errorCode,
           });
           break;
         case ErrorShowType.REDIRECT:
           // TODO: redirect
           break;
         default:
           message.error(errorMessage);
       }
     }
   } else if (error.response) {
     // Axios 的错误
     // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
     message.error(`Response status:${error.response.status}`);
   } else if (error.request) {
     // 请求已经成功发起，但没有收到响应
     // \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，
     // 而在node.js中是 http.ClientRequest 的实例
     message.error('None response! Please retry.');
   } else {
     // 发送请求时出了点问题
     message.error('Request error, please retry.');
   }
 
 };
 
 export const request: RequestConfig = {
   timeout: 10000,
   baseURL:'',
   headers: {'X-Requested-With': 'XMLHttpRequest'},
   // other axios options you want
   errorConfig: {
     // 错误抛出
     errorThrower: (res: ResponseStructure) => {
     console.log('error--res',res);
 
       const { success, data, errorCode, errorMessage, showType } = res;
       if (!success) {
         const error: any = new Error(errorMessage);
         error.name = 'BizError';
         error.info = { errorCode, errorMessage, showType, data };
         throw error; // 抛出自制的错误
       }
     },
     // 错误接收及处理
     errorHandler,
   },
   requestInterceptors: [
     (config: any) => {
       console.log(config);
       
       // 拦截请求配置，进行个性化处理。
         // const url = config.url.concat('?token = 123');
         return { ...config};
       }
   ],
   responseInterceptors: [
     (response: any) => {
       console.log(response);
       
       // 拦截响应数据，进行个性化处理
       // const { data } = response;
       // if(!data.success){
       //   message.error('请求失败！');
       // }
       return response;
    }
   ],
 };
 
 export default request;
 