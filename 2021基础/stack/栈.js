// 后进先出

// 使用Array实现栈
const stack = [];

// 入栈
stack.push(1);
stack.push(2);

// 出栈
const item1 = stack.pop();

console.log(item1);

const item2 = stack.pop();

// 栈顶
const item = stack[stack.length - 1];

// 十进制转二进制
// 有效括号：最后进栈出栈为空即合法
// 函数调用堆栈
