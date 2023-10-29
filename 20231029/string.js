let str1 = 'abcdedfg'
let str = '123'

for(let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

console.log(str.charCodeAt(0));

console.log(str.charAt(0))

console.log(str.concat(str1));

console.log(str.search('2'));

let a = 3
let b = 4
while(a>1 || b > 1) {
  console.log(a,b);
  a--
  b--
}

for(let i = 0, j = 0; i < 3 && j > -1; i++, j--) {
  console.log(i, j);
}

const obj = {a:1}
console.log(obj);
console.log(1 & 2);

function myTemplate(strings, ...values) {
  strings
  values
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += values[i];
    }
  }
  return result;
}

const name = 'John';
const age = 25;
const message = myTemplate`Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // 输出：Hello, my name is John and I am 25 years old.
