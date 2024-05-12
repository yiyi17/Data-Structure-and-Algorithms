
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
      }, reject => {
        list[index] = {
          status: 'rejected',
          value: reject
        }
      }).finally(() => {
        count++
        if(count === p.length) resolve(list)
      })
    })
  })
}
Promise.myRace = function(p) {
  return new Promise((resolve, reject) => {
    Array.from(p).forEach(item => {
      Promise.resolve(item).then(resolve, reject)
    })
  })
}

Promise.resolve((Promise.resolve(1))).then(res => {
  console.log(res)
});

// Promise.race
// Promise.allSettled
// Promise.all

const requests = [
  new Promise((resolve, reject) => setTimeout(resolve, 3000, 111)),
  new Promise((resolve, reject) => setTimeout(resolve, 2000, 2222)),
  new Promise((resolve, reject) => setTimeout(reject, 1000, 3333)),
]

requests

Promise.race(requests).then(res => {
  console.log(res);
},(reject) => {
  console.log(reject);
})

Promise.myRace(requests).then(res => {
  console.log(res);
},(reject) => {
  console.log(reject);
})

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

