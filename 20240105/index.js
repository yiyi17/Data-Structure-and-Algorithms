// 寄生组合继承

// 寄生组合继承是组合继承和原型式继承的结合体。
// 通过创建一个中间对象来继承父类的原型，从而避免了调用父类构造函数两次。以下是寄生组合式继承的实现方式：

function Parent(name) {
  this.name = name
}

Parent.prototype.sayHello = function() {
  console.log('hello', this.name);
}

function Child(name, age) {
  // 继承父类的「属性」
  // 是在子类的构造函数中调用父类的构造函数，并将子类实例作为上下文（this）传递给父类构造函数。这样做的目的是为了在子类实例上执行父类构造函数中的代码，以便子类实例能够继承父类的属性。
  Parent.call(this, name)
  this.age = age
}

// 继承父类的「方法」
Child.prototype = Object.create(Parent.prototype)
// 我们将子类的构造函数指向子类本身，以确保正确的构造函数引用。
Child.prototype.constructor = Child

Child.prototype.sayAge = function() {
  console.log(`I am ${this.age} years old`);
}

const parent = new Parent('John')
parent.sayHello()

const child = new Child('Alice', 10)
child

child.sayHello()

child.sayAge()