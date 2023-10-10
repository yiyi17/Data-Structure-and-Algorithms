// 函数反柯里化
// 是一个泛型化的过程。它使得被反柯里化的函数，可以接收更多参数。使本来只有特定对象才适用的方法，扩展到更多的对象。

// obj.func(arg1, arg2) 转化为函数func(obj, arg1, arg2)

Function.prototype.uncurrying = function(fn) {
  return function() {
    return Function.prototype.call.apply(fn, arguments);
  };
};
function sayHi() {
  console.log([].slice.call(arguments));
  return "Hello " + this.value + " " + [].slice.call(arguments);
}

var sayHiuncurrying = sayHi.uncurrying(sayHi);
console.log(sayHiuncurrying({ value: "world" }, "hahaha"));


// const f1 = (n) => {
//   console.log(n);
//   return n + 3;
// };
// const f2 = (n) => {
//   console.log(n);
//   return n + 2;
// };
// const f3 = (n) => {
//   console.log(n);
//   return n + 1;
// };


// // const foo = makeFoo(f1, f2, f3);
// // console.log(foo(1));

// // const foo = makeFoo(f1, f2, f3);
// // console.log(foo(1,2,3));
// // foo(1,2,3) === f1(f2(f3(1,2,3)));

// //
