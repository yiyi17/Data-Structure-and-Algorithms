const http = require('http')

// 编写一个内存溢出的函数
const arr = []
function list() {
  for(let i = 0; i < 1000; i++) {
    arr.push(100000000000000)
  }
}

// 监听内存变化

// 启动一个服务看下


http.createServer((req, res) => {
  list()
  console.log(arr.length);
  const memoryUsage = process.memoryUsage()
  console.log(memoryUsage);
  res.write(arr.toString())
  res.end()
})
.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
})