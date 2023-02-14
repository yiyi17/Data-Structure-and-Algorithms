import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = ProSettings & {
  pwa: boolean;
};

/**
 * @description 布局配置
 */
const proSettings: DefaultSettings = {
  navTheme: 'light',
  layout: 'mix',// 'side' | 'top' | 'mix';
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'pv 平台',
  pwa: false,
  iconfontUrl: '//at.alicdn.com/t/font_2308913_fwv8cwifw65.js',
  splitMenus: true,
};

export type { DefaultSettings };

export default proSettings;
