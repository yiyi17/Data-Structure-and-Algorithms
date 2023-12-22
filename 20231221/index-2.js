// 静态Object.create()方法创建一个新对象，使用现有对象作为新创建对象的原型。
// 参数

// - proto: 该对象应该是新创建对象的原型。

// - propertiesObject 选修的,如果指定且未指定undefined，则对象的可枚举自身属性指定要添加到新创建的对象的属性描述符以及相应的属性名称。这些属性对应于 的第二个参数Object.defineProperties()。

const newObj = Object.create({ a: 1 });

newObj;

// 原型
console.log(newObj.__proto__);

// 参数 propertiesObject
const newObj2 = Object.create(
  { a: 1 },
  {
    b: {
      value: 100,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  },
);

newObj2;

newObj2.b = 200;

newObj2;
