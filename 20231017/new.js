function myNew() {
  let obj = new Object();

  arguments;

  let fn = Array.prototype.shift.call(arguments);

  fn;

  obj.__proto__ = fn.prototype;

  let result = fn.apply(obj, arguments);

  console.log(result);

  return typeof result === 'object' ? result : obj;
}

function P(name) {
  this.name = name;
  return 1;
}

var p2 = myNew(P, 'xm');
p2;
console.log(p2);

// 在严格模式下的输出
('use strict');
let func = function () {
  this.value = 1;
};
let obj = myNew(func);
func.prototype.value = 2;

let value = 3;

func();

console.log(value); // 3
console.log(obj.value); // 1
