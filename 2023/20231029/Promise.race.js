var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one');
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'two');
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four');
});
var p5 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, 'reject');
});

Promise.race([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
}, reason => {
  console.log(reason)
})
.catch(err => {
  console.log(err);
})
.finally(() => {
  console.log('finally');
});
//结果：
//reject
//Promise {<fulfilled>: undefined}
