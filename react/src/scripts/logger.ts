import ZHLogger from 'za-js-monitor';

function loggerInit(common: Record<string, any> = {}) {
  return new ZHLogger({
    performance: true, // 采集性能
    resourceError: true, // 采集资源加载错误
    request: true, // 采集请求异常
    resourcePerformance: true, // 采集加载时间较长的资源
    runtimeError: true, // 采集错误
    common: {
      disableLog: process.env.NODE_ENV === 'development', // 是否禁止日志上报，建议本地改为 true
      projectId: 'pv-webapp', // 项目id，必传
      // userId: 'xxx', // 通过入参传递
      ...common,
    },
  });
}

export default loggerInit;
