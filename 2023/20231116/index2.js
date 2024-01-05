function Person() {
  this.age = 1;
}

console.log(Person.age);

Promise;
console.log(Promise.prototype);
// 是一个构造函数,是一个类 class, 原生提供
console.log(Promise instanceof Function, Promise instanceof Object, Promise instanceof Promise);
let p = new Promise((resolve, reject) => {
  resolve(1);
})
  .then((res) => {
    console.log(res);
    return 2;
  })
  .then((res) => {
    console.log(res);
    return 3;
  })
  .then((res) => {
    console.log(res);

    return 34;
  })
  .then((res) => {
    return 102;
  });

console.log(p);
console.log(p.__proto__);

console.log(p.__proto__ === Promise.prototype);

console.log(p instanceof Promise);

console.log(p.constructor === Promise);

p.then((res) => {
  console.log(res);
});

// Promise.resolve 是个Promise，但不是函数，而是一个 Object
const c = Promise.resolve(10);

console.log(c);
console.log(c instanceof Promise);
console.log(c instanceof Object, c instanceof Function);
console.log(Promise instanceof Function, Promise instanceof Object);

c.then((res) => {
  console.log(res);
});

Promise.all([1, 2, Promise.reject(10), Promise.reject(20)])
  .then(
    (res) => {
      console.log(res);
    },
    (res) => {
      console.log(res);
    },
  )
  .catch((res) => {
    console.log(res);
  });

Promise.race([Promise.reject(10), 1, 2, Promise.reject(20)])
  .then(
    (res) => {
      console.log(res);
    },
    (res) => {
      console.log(res);
    },
  )
  .catch((res) => {
    console.log(res);
  });

Promise.any([Promise.reject(10), 1, 2, Promise.reject(20)])
  .then(
    (res) => {
      console.log(res);
    },
    (res) => {
      console.log(res);
    },
  )
  .catch((res) => {
    console.log(res);
  });

Promise.allSettled([1, 2, Promise.reject(10), Promise.reject(20)])
  .then(
    (res) => {
      console.log(res);
    },
    (res) => {
      console.log(res);
    },
  )
  .catch((res) => {
    console.log(res);
  });
