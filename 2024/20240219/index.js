// a >>> b 把 a 的二进制表示向右移动 b 位，丢弃被移出的所有位，并把左边空出的位都填充为 0

// 使用无符号右移运算符判断正负数
function isPos(n) {
  return n >>> 0 === n ? true : false;
}

isPos(1); // true
isPos(-1); // false


// 基础知识

/**
 * 1、ECMAScript中的所有数值都以IEEE-754 64位格式存储，但位操作符并不直接操作64位的值。而是先将64位的值转成32位的整数，然后执行操作，最后再将结果转换回64位
 * 
 * 2、对于有符号的整数，32位中的前31位用于表示整数的值，第32位用于表示数值的符号：0表示正数，1表示负数。这个表示符号的位叫做符号位，符号位的值决定了其他位数值的格式
 * 这里要说一下，二进制的位数，是从右到左开始算起的，最右是第一位，也叫做位0，而第32位，也就是最左边的位数表示的就是数值的符号：0为正数，1表示负数。
 * 
 * 3、
 */