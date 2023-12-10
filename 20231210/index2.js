// Date.parse 如何使用
const time = Date.parse('01 Jan 1970 00:00:01 GMT');
time;

console.log(Date.parse('1970-01-0'));

const time2 = Date.UTC(1970, 0, 1);
time2;
