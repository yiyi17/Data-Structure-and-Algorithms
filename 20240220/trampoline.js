 
/**
 * 
 * @param {*} n 
 * @returns 
 * 但是作为一个合格的程序员，我们也因该知道，递归算法相对常用的算法如普通循环等，运行效率较低。因此，应该尽量避免使用递归，除非没有更好的算法或者某种特定情况，递归更为适合的时候。在递归调用的过程当中系统为每一层的返回点、局部量等开辟了栈来存储，递归次数过多容易造成栈溢出等。
 */

// 内存会溢出，如果只保留这个函数的话，JS 还没有支持尾递归优化

// function sum(n, total) {
//   if(n === 1) return total
//   return sum(n-1, n + total)
// }
// console.log(sum(1000000, 1));

// 实现尾递归的优化

function trampoline(fn) {
  return function(...args) {
    let result = fn(...args);
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  }
}

function add(m, result = 1) {
  if (m <= 1) return result;
  return () => add(m - 1, result + m);
}


function sum(n) {
  let result = trampoline(add)(n);
  return result
}

console.log(sum(100000)); // 不会栈溢出

// 100:5050

