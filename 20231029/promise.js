
Promise.myAll = function(p) {
  return new Promise((resolve, reject) => {
    let list = []
    let count = 0
    Array.from(p).forEach((item, index) => {
      Promise.resolve(item).then(res => {
        list[index] = res
        count++
        if(count === p.length) resolve(list)
      }, reject)
    })
  })
}
Promise.myAllSettled = function(p) {
  return new Promise((resolve, reject) => {
    let list = []
    let count = 0
    Array.from(p).forEach((item, index) => {
      Promise.resolve(item).then(res => {
        list[index] = {
          status: 'fulfilled',
           value: res
        }
        count++
        if(count === p.length) resolve(list)
      }, reject => {
        list[index] = {
          status: 'rejected',
          value: reject
        }
        count++
        if(count === p.length) resolve(list)
      })
    })
  })
}

Promise.resolve((Promise.resolve(1))).then(res => {
  console.log(res)
});



// Promise.race
// Promise.allSettled
// Promise.all

const requests = []
for(let i = 0; i < 10; i++) {
  requests.push(Math.random() > 0.2 ? Promise.resolve(i) : Promise.reject(i))
}

requests

Promise.myAll(requests).then(res => {
  console.log(res);
},(reject) => {
  console.log(reject);
})

/**
 * @description Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
 */
Promise.all(requests).then(res => {
  console.log(res);
},(reject) => {
  console.log(reject);
})

/**
 * @description Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
 */
Promise.race(requests).then(res => {
  console.log(res);
},(reject) => {
  console.log(reject);
})

/**
 * @description Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.
 */
Promise.allSettled(requests).then(res => {
  console.log(res);
},(reject) => {
  console.log(reject);
})

Promise.myAllSettled(requests).then(res => {
  console.log(res);
},(reject) => {
  console.log(reject);
})