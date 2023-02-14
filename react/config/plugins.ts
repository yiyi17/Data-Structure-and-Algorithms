import { IApi } from 'umi';

export default (api: IApi) => {
  api.addHTMLHeadScripts(() => `console.log('I am in HTML-head')`);
};
