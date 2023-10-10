const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'two');
  });

//   一旦迭代器中的某个promise`解决或拒绝`，返回的 promise就会解决或拒绝。

Promise.race([promise1, promise2]).then((val) => {
    console.log(val);
},(val) => {
    console.log(val);
})