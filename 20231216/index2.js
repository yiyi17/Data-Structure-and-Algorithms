// 根据输入的带数字的字符串转为计算好的字符串;
// 输入： 3[a2[c]]
// 输出：accaccacc

function generateOutput(str) {
  let stack = [];
  let currentNum = 0;
  let currentStr = '';
  for (let char of str) {
    if (char.match(/\d/)) {
      currentNum = char * 1;
    } else if (char.match(/[a-z]/i)) {
      currentStr += char;
    } else if (char === '[') {
      stack.push({ str: currentStr, num: currentNum });
      currentStr = '';
      currentNum = 0;
    } else if (char === ']') {
      const { str, num } = stack.pop();
      currentStr = str + currentStr.repeat(num);
    }
  }
  return currentStr;
}
const output = generateOutput('3[a2[c]]');
console.log(output); // 输出：accaccacc
