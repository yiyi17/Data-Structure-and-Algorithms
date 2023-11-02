new Promise(resolve => {
  resolve(1000)
}).then(res => {
  console.log(res);
  return 2000
}).then(res => {
  console.log(res);
})