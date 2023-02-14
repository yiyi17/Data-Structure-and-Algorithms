// umi proxy: https://umijs.org/zh-CN/config#proxy

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const isDev = process.env.NODE_ENV === 'development';

export let currentAddress = isDev ? '' : '';

// 接口代理
const proxy: any = {
  '/mock/*': {
    target: 'https://xxx.com',
    changeOrigin: true,
  },
};

export default proxy;
