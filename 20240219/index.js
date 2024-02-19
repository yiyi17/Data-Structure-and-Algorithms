// 使用无符号右移运算符判断正负数
function isPos(n) {
  return n >>> 0 === n ? true : false;
}

isPos(1); // true
isPos(-1); // false