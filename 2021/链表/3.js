const obj = {};
const func = () => {};
const arr = [];

// arr instanceof Object;
// __proto__属性
// prototype 原型对象

// instanceOf原理: 指针遍历原型链  
// 手写instanceOf函数
const instanceOf = (A, B) => {
  // p 指针
  let p = A;
  while (p) {
    if (p === B.prototype) {
      return true;
    }
    p = p.__proto__;
  }
  return false;
};
