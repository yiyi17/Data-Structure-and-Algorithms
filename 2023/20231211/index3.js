// 但实例引用的仍然是最初的原型。记住，实例只有指向原型的指针，没有指向构造函数的指针

function Person() {}

const person1 = new Person();

Person.prototype = {
  say: () => {
    console.log('hello');
  },
};

const person2 = new Person();

person2.say(); // hello

person1.say(); // person1.say is not a function
