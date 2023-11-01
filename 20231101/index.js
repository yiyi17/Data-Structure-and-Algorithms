// 
// function scheduler(num) {

//   const quque = [];
//   let count = 0;
//   let wait = [];

//   function then(callback) {

//     if(quque.length === 0){
//       return;
//     }


//     if (count >= num) {
//       wait.push(callback)
//       return;
//     }

//     count++
    
//     quque.pop()().then(() => {
//       callback();
//       count--

//       if(wait.length > 0){
//         then(wait.pop());
//       }
//     })
//   }


//   return function (fn) {
//     quque.push(fn);

//     return {
//       then
//     }
//   }
// }

// function scheduler(num) {
//   let quque = [];
//   let pendingCount = 0;
//   let resolveQuque = [];

//   function request(resolve) {
//     quque.shift()().then((res) => {
//       resolve(res)
//       pendingCount--
//       if(resolveQuque.length){
//         request(resolveQuque.shift());
//       }
//     });
//   }

//   return (fn) => {
//     quque.push(fn);

//     return new Promise((resolve) => {

//       if (pendingCount >= num) {
//         resolveQuque.push(resolve);
//         return;
//       }

//       pendingCount++
//       request(resolve);
//     })
//   }
// }

function scheduler(limit) {
  const quque = []
  let pendingCount = 0
  let resolveQueue = []

  function request(resolve) {
    console.log(resolve);
    quque.shift()().then((res) => {
      resolve(res)
      pendingCount--
      if(resolveQueue.length) {
        request(resolveQueue.shift())
      }
    })
  }

  return function(task) {
    quque.push(task)
    return new Promise((resolve) => {
     
      if(pendingCount >= limit) {
        resolveQueue.push(resolve);
        return
      }

      pendingCount++
      request(resolve)
    })
  }
}

const timeStart = Date.now();
const addRequest = scheduler(2);
const task1 = () => new Promise((r) => { setTimeout(() => {r('task1')}, 500) });
const task2 = () => new Promise((r) => { setTimeout(() => {r('task2')}, 800) });
const task3 = () => new Promise((r) => { setTimeout(() => {r('task3')}, 1000) });
const task4 = () => new Promise((r) => { setTimeout(() => {r('task4')}, 1000) });
addRequest(task1).then((res) => { console.log(res, Date.now() - timeStart) });
addRequest(task2).then((res) => { console.log(res, Date.now() - timeStart) });
addRequest(task3).then((res) => { console.log(res, Date.now() - timeStart) });
addRequest(task4).then((res) => { console.log(res, Date.now() - timeStart) });

// 500 800 1500 1800