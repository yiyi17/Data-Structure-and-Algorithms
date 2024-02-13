// 浅拷贝：赋值、Object.assign


const obj = {a:1,b:2, c: {d:1}}
const obj2 = Object.assign({},obj)

obj2.a=100
obj2.c.d=200

// 第一层做了深拷贝
// 其他是浅拷贝
console.log(obj, obj2);
