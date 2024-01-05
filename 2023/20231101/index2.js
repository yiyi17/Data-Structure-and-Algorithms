// // Promise 声明一个 resolve 回调才执行


// function scheduler(limit) {
//   const queue = []
//   const pendingQueue = []
//   let pendingCount = 0
//   return function (task) {
//     queue.push(task)
//     let request = function(resolve) {
//       queue.shift()().then(function(res){
//         resolve(res)
//         pendingCount--
//         if(pendingQueue.length){
//           request(pendingQueue.shift())
//         }
//       })
//     }
//     return new Promise((resolve) => {
//       if (pendingCount >= limit) {
//         pendingQueue.push(resolve)
//         return
//       }
//       pendingCount++
//       request(resolve,queue)
//     })
//   }
// }

// const timeStart = Date.now();
// const addRequest = scheduler(2);
// const task1 = () => new Promise((r) => { setTimeout(() => {r('task1')}, 500) });
// const task2 = () => new Promise((r) => { setTimeout(() => {r('task2')}, 800) });
// const task3 = () => new Promise((r) => { setTimeout(() => {r('task3')}, 1000) });
// const task4 = () => new Promise((r) => { setTimeout(() => {r('task4')}, 1000) });
// addRequest(task1).then((res) => { console.log(res, Date.now() - timeStart) });
// addRequest(task2).then((res) => { console.log(res, Date.now() - timeStart) });
// addRequest(task3).then((res) => { console.log(res, Date.now() - timeStart) });
// addRequest(task4).then((res) => { console.log(res, Date.now() - timeStart) });


function fn() {
  let resoleQueue = []
  return new Promise(resolve => {
    resoleQueue.push(resolve)
    resoleQueue.forEach(callback => {
      console.log(callback);
        callback(10000)
        
    });
    resolve(99999)
  })
}



// resolve 执行完成就不会再改变
// 每一个then都是微任务，resolve 状态变更之后再执行
// resolve 可以被收集
// then 的执行要看状态的变化
// new Promise 的 then 方法优先级更高

fn().then(res => console.log(1, res)).then(res => console.log(2,res))
fn().then(res => console.log(2, res))
fn().then(res => console.log(3, res))


