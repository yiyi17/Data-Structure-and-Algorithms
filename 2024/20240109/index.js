process.on('uncaughtException', (err) => {
  console.log('未捕获的异常', err.message);
})

process.on('unhandledRejection', (err, promise) => {
  console.log('有 Promise 没有被捕获的失败', err.message);
})

let syncError = () => {
  throw new Error('sync error')
}

let asyncError = () => {
  return new Promise((resolve, reject) => {
    syncError()
  })
  
}

asyncError()
syncError()