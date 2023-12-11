// Promise.reject 被 await 捕获，异步任务转同步
// try catch 只能捕获同步任务

async function fn() {
  // return Promise.reject('error');
  return new Promise((resolve, reject) => {
    throw new Error('err');
  });
}

(async () => {
  try {
    const a = await fn();
    a;
  } catch (error) {
    console.log(error);
  }
})();
