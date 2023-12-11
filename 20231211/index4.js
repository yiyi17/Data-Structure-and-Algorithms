// 如果你将一个新的对象分配给变量，它将断开与原始对象的引用关系，这可能会更改指针地址
let obj1 = { name: 'John' };
let obj2 = { name: 'Jane' };

obj1 = obj2;

console.log(obj1 === obj2); // 输出 true
