// 设计一个 请求器，支持重试

// 易用、封装良好

// 开发思路：1、先想好什么是好用的 2、 设计易扩展参数 3、编码

/**
 * 
 * @param {*} service 请求
 * @param {*} options 参数
 * @param {*} pliugins 插件
 */
async function useRequest(service, options, pliugins) {

  let result = null
  
  let { retry } = options

 async function retryFn() {
  retry--
   try {
    result = await service()
  } catch (error) {
    if(retry === 0 ) {
      result = error
    }
  }
 }

  while(retry && !result) {
    retryFn()
  }

  return {
    result
  }

}



const { result } = await useRequest(fetch('url'), {retry: 2})



// useRequest
// https://github.com/alibaba/hooks/tree/bf4e0ef7def6bca0cdf3e9c908c4b9402d1200c1/packages/hooks/src/useRequest