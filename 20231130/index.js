// for await of：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for-await...of
var asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        console.log(this.i);
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }
        return Promise.resolve({ done: true });
      },
    };
  },
};
// 支持数组吗？支持的

// for await...of 语句创建一个循环，该循环遍历异步可迭代对象以及同步可迭代对象，包括：内置的 String, Array，类似数组对象 (例如 arguments 或 NodeList)，TypedArray, Map, Set 和用户定义的异步/同步迭代器。
asyncIterable = [
  Promise.resolve(1),
  new Promise((resolve) => setTimeout(resolve(2), 2000)),
  3,
];

(async () => {
  for await (num of asyncIterable) {
    console.log(num);
  }
})();
