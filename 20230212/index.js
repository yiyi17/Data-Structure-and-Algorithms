// 不同硬币面额 coins，求总 amount 需要的最少硬币数
// dp[0] = 0 金额为零时不需要硬币
// dp[n] = min(dp[n],dp[n-coin1] + 1，dp[n-coin2],...)  金额为n时，硬币数等于(n-coin)+1中所需硬币最少的组合


function caculate(amount,coins) {
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for(let i = 0; i <= amount; i++) {
    for(let coin of coins) {
      if(i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i-coin] + 1)
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]

}

console.log(caculate(7, [2,4,5,6]));