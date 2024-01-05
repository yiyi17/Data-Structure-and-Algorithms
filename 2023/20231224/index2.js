function fn() {}

// 只要创建函数，就会按照特定规则创建一个 prototype 属性
console.log(fn.prototype);

// 原型对象自动获得 constructor 属性，指回与之关联的构造函数
console.log(fn.prototype.constructor === fn);

fn.prototype.name = '11';

const f = new fn();

// 实例内部[[Prototype]] 指针赋值为构造函数的原型对象
console.log(f.__proto__ === fn.prototype);

// 实例与构造函数的原型有直接关系，但是和构造函数之间没有
