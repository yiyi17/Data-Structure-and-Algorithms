// 十进制转二进制

// NumberObject.toString(radix);
// const a = parseInt(10).toString(2);
// console.log(a);

// // 二进制转十进制
// // parseInt(string, radix);
// const b = parseInt(a, 2);
// console.log(b);

/**************** 题目***********/
// 输⼊: 5
// 输出: 2
// 解释: 5 的⼆进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。

// 输⼊: 1
// 输出: 0
// 解释: 1 的⼆进制表示为 1（没有前导零位），其补数为 0。所以你需要输出 0 。
/**************** 题目***********/

// 字符串使用索引只能读不能改
// replace方法只能不修改字符串本身
// 二进制 十进制转换

function fn(n) {
  let str = parseInt(n).toString(2);

  if (str[0] === "1") {
    str = "0" + str.slice(0, str.length - 1);
  } else {
    str = "1" + str.slice(0, str.length - 1);
  }

  return parseInt(str, 2);
}
console.log(fn(5));

// 有符号右位移;
function fn2(n) {
  return n >> 1;
}
console.log(fn2(5));
