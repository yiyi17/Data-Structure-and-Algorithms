'use strict';

// 1、变量必须声明才能使用
// 2、变量必须声明才能使用
// 3.创建eval作用域
// 4、创建eval作用域
// 5、禁止在函数内部遍历调用栈
// 6、严格模式下无法删除变量，只有conifgurable设置为true的对象属性才能被删除
// 7、正常模式下对一个对象的只读属性进行赋值，不会报错，只会默默失败。严格模式下将报错
// 8、.严格模式下，对禁止扩展的对象添加新属性，会报错
// 9、.严格模式下，删除一个不可删除的属性，报错
// 10、.函数不能有重名的参数，严格模式会报错
// 11、.禁止八进制写法
// 12、不准对arguments赋值
// 13、严格模式下的arguments不在追踪参数的变化
// 14、禁止使用arguments.callee


let a = 0o15;
console.log(a);

// with(function(){})

eval(`var a=1`)
// console.log(a);


function fn()  {
  console.log(this);
  // console.log( fn.caller);
  return !this
}
fn()

const obj = {
  x: 1
}
// delete obj.x
// obj

Object.defineProperty(obj, 'x', {
  value: 2,
  writable: false
})

Object.preventExtensions(obj)
// obj.y =`1`// Cannot add property y, object is not extensible 

// delete Object.prototype// Cannot delete property 'prototype' of function Object() { [native code] } 


// obj.x = 1 // Cannot assign to read only property 'x' of object '#<Object>' s

// const x = 1
// delete x
// console.log(x);

const obj2 = {
  a: 1,
  a: 2
}
// obj2
console.log(obj2);

// function fn2(x,x) { // SyntaxError: Duplicate parameter name not allowed in this context
//   console.log(x);
// }

// fn(1,1)


// 严格模式下的arguments不在追踪参数的变化s
function fn(a){
  a=2;
  return [a,arguments[0]];
}
console.log(fn(1));; //正常模式返回值 [2,2]
