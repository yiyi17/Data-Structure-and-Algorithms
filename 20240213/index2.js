// 二进制散列值
const READ = 0b00001;
const WRITE = 0b00010;
// 执行
const EXECUTE = 0b00100;
const DELETE = 0b01000;
const SHARE = 0b10000;

console.log(READ);

// 读写
const READ_WRITE = READ | WRITE;
console.log(READ_WRITE);

// 是否有读权限
console.log(READ_WRITE & READ);



