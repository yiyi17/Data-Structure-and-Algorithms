// urls 是数组，maxNum 是最大并发数，callback 是回调，所有请求结束后回调
async function requests(urls, maxNum, callback) {
  let total = urls.length;
  let count = 0;
  const result = [];

  if (total <= 0) {
    return;
  }

  const fetchFn = (url) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(url);
      }, url * 1000);
    });
  };
  const requestsFn = (url, resolve) => {
    fetchFn(url).then((res) => {
      result.push(res);
      count--;
      if (count < maxNum && total > 0) {
        requestsFn(urls.shift(), resolve);
        total--;
      }
      if (total === 0) {
        resolve(result);
      }
    });
  };

  return new Promise((resolve, reject) => {
    while (total > 0 && count < maxNum) {
      const url = urls.shift();
      console.log(111);
      total--;
      count++;
      requestsFn(url, resolve);
    }
  });
}
const urls = ['1', '2', '3', 5, 6, 7, 8, 9, 10];
const maxNum = 2;
const callback = (res) => {
  console.log(res);
};
(async () => {
  const res = await requests(urls, maxNum, callback);
  console.log(res);
})();
