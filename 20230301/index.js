// 动态规划

// 斐波那契数列
// 动态规划 + 降维，（降维能减少空间复杂度，但不利于程序的扩展）
var fib = (N) => {
  if(N <= 1) {
    return N
  }
  let prev2 = 0
  let prev1 = 1
  let result = 0

  for (let i = 0; i <= N; i++) {
    result = prev1 + prev2
    prev2 = prev1
    prev1 = result    
  }
  return result
}

