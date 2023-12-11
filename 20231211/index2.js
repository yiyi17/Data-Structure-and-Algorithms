// unhandledrejection

// unhandledrejection 正确用法: 当 Promise 被 reject, 且调用 then 方法没有 reject 处理器的时候，会触发 unhandledrejection 事件；这可能发生在 window 下，但也可能发生在 Worker 中
window.addEventListener('unhandledrejection', (e) => {
  console.log('unhandledrejection', e);
  e.preventDefault();
});

window.addEventListener('error', (e) => {
  console.log('error', e);
  e.preventDefault();
});

new Promise((resolve, reject) => {
  reject(100);
}).then((res) => {});

// 如果一个 Promise 没有使用 then 方法处理其结果或错误，并且发生了拒绝（rejected）状态，你可以使用 catch 方法来捕获这个错误。catch 方法是 then 方法的一个特殊形式，用于捕获拒绝（rejected）状态的 Promise。
new Promise((resolve, reject) => {
  reject(123);
}).catch((err) => {
  console.log(err);
});
