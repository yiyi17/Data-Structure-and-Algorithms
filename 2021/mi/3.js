// 2. vue
// vue  数据响应式原理
// defineProperty

// 2.1 数据劫持


// Object.defineProperty(, , ?)
// 术语：属性描述符

// in
// Object.keys()

// 目标对象自身的属性键组成的数组。它的返回值等同于Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))

// Reflect.ownKeys()

var obj = {a:1,b:2}