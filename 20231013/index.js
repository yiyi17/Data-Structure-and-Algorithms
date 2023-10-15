/**
 * 题目：写一个 sum 方法，当使用下面的语法调用时，能正常工作
 *  console.log(sum(2, 3)); // Outputs 5
 * console.log(sum(2)(3)); // Outputs 5
 */

/**
 * 单做这个题目是个简单题目
 */
// function sum(x) {
//   const args = [].slice.call(arguments)
//   if(args.length > 1) {
//     return args.reduce((pre,cur) => pre + cur, 0)
//   }
//   return function (y) {
//     return x+y
//   }
// }
// sum(2)(3)


/**
 * 如果传入多个，上面是不太行的，sum(2,3,4)|sum(2)(3)(4)
 * 需要使用柯理化：在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
 * 
 * 考点：这个题重点是要理解柯理化函数，并能自己手写一个
 */



function carry(fn, currArgs) {
  return function() {
    let args = [].slice.call(arguments)
    // 收集参数
    if(currArgs) {
      args = args.concat(currArgs)
    }
    // 跳出递归
    if(fn.length > args.length) {
      return carry(fn, args)
    }
    return fn.apply(null, args)
  }
}

const fn = (a,b,c) =>console.log( a + b + c);;
const sum = carry(fn)

sum(2)(3)(4)//9
sum(2,3,4)//9



sum(1, 2, 3); // 6
sum(1, 2)(3); // 6
sum(1)(2, 3); // 6
sum(1)(2)(3); // 6


