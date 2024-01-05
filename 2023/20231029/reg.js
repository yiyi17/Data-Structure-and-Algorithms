// * 表示匹配前面的子表达式零次或多次。例如，a* 可以匹配空字符串或多个连续的 a 字符。
// ? 表示匹配前面的子表达式零次或一次。例如，a? 可以匹配空字符串或单个 a 字符。
// 捕获组 (.*?)
const regex = /\+(.*?)\+/;

const string = 'ab+e+dg';

const match = string.match(regex);

if (match) {
  match;
  console.log(match[1]); // 输出: e
}

const str = '00ddd55';

console.log(str.match(/d+(.*?)d+/));
