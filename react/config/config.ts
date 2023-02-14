import { defineConfig } from '@umijs/max';
//@ts-ignore
import proxy from './proxy';
import routes from './routes';
import theme from './theme';
export default defineConfig({
  theme,
  deadCode: {},// 检测未使用的文件和导出，仅在 build 阶段开启。
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  devtool: process.env.NODE_ENV !== 'development' ? 'eval' : 'source-map',
  routes,
  npmClient: 'yarn',
  clickToComponent: {},
  proxy,
  favicons: ['/favicon.png'],
  headScripts: [
    // GA 埋点
    // {
    //   src: 'https://www.googletagmanager.com/gtag/js?id=xxx',
    //   async: true,
    // },
    // {
    //   content: `window.dataLayer = window.dataLayer || [];
    // function gtag() {
    //   dataLayer.push(arguments);
    // }
    // gtag('js', new Date());
    // gtag('config', 'G-xxx');`,
    //   charset: 'utf-8',
    // },
  ],
  plugins: [],
  hash: true,
});
