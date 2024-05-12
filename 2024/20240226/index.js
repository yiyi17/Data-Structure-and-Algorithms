const p = new Promise((resolve, reject) => {
  resolve(123)
})

p.then(res => {
  console.log(res);
  return 456
}).then(res => {
  console.log(res);
})

p.then(456).then(res => {
  console.log(res);
})

p.then(res => {
  return new Promise((resolve, reject) => {
    resolve(789)
  })
}).then(res => {
  console.log(res);
}).then(res => {
  return p.then()
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    // 默认状态
    this.status = PENDING
    // 执行结果
    this.value = undefined
    // 失败结果
    this.reason = undefined
    // 成功回调
    this.onFulfilledCallbacks = []
    // 失败回调
    this.onRejectedCallbacks = []

    // 调用这个方法表示成功
    const resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onFulfilledCallbacks.forEach(fn => fn())
      }
    }

    // 调用这个方法表示失败
    const reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    // 执行器立即执行，如果异常的话，就直接执行reject
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  // x 可能是一个Promise
  resolvePromise(promise2, x, resolve, reject) {
    console.log(x);
    // 如果x和promise2是同一个对象，那么就抛出一个类型错误
    if (promise2 === x) {
      return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    // 如果x是一个promise的话，那么就采用这个promise的状态
    let called = false
    if((typeof x === 'object' && x !== null) || typeof x === 'function') {
      try {
        const then = x.then
        if (typeof then === 'function') {
          then.call(x, y => {
            y
            if (called) return
            called = true
            this.resolvePromise(promise2, y, resolve, reject)
          }, r => {
            if (called) return
            called = true
            reject(r)
          })
        } else {
          resolve(x)
        }
      } catch (error) {
        if (called) return
        called = true
        reject(error)
      }
    }else {
      resolve(x)
    }
  }

  then(onFulfilled, onRejected) {
    // 判断是不是函数，如果不是函数，就给一个默认的函数（值的穿透）
    const onRealFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    const onRealRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
   
    // 返回一个新的promise，这样就可以链式调用，并且成功与失败是和当前的执行结果相关
    let promise2 = new MyPromise((resolve, reject) => {
      // 判断状态, 如果是成功的话，就执行成功的回调, setTimeout 模拟的微任务 microtask
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            const x = onRealFulfilled(this.value)
            this.resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            const x = onRealRejected(this.reason)
            this.resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRealFulfilled(this.value)
              // x 可能是一个promise
              this.resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRealRejected(this.reason)
              this.resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })
    return promise2
  }

}

const p_1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(123)
  }, 1000)
})

p_1.then(async data => {
  console.log(data);
  return 1223
}, err => {
  console.log(err);
}).then(data => {
  console.log(data);
  return 789
}, err => {
  console.log(err);
})
.then(data => {
  console.log(data);
})

p_1.then(data => {
  console.log(data);
}, err => {
  console.log(err);
})

p_1.then(data => {
  console.log(data);
  return new MyPromise((resolve, reject) => {
    resolve(456)
  })
}, err => {
  console.log(err);
}).then(data => {
  console.log(data);
  return { a: 1 }
}).then(data => {
  console.log(data);
})



