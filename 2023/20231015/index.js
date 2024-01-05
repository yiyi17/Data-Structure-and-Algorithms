// 0,1,1,2,3,5,8

const fib = function(n) {
  if(n === 0) return 0
  if(n === 1) return 1
  if(n === 2) return 1
  return fib(n-2) + fib(n-1)
}

function subFib(n) {
  // let res = 0
  // while(n > 0) {
  //   res += fib(n)
  //   n--
  // }
  // return res
  let res = 1, m = 0,  k = 1
  for(let i = 1; i < n; i++) {
    const temp = k
    k = m + k
    res += k
    m = temp
  }
  return res
}




console.log(subFib(5))