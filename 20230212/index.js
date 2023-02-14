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


const allMoney = [100, 50, 20, 5, 1];  // 表示我们手上有的面值
function changeMoney(n, allMoney) {
  const length = allMoney.length;
  const result = [];    // 存储结果的数组，每项表示对应面值的张数
  for(let i = 0; i < length; i++) {
    if(n >= allMoney[i]) {
      // 如果需要找的钱比面值大，那就可以找，除一下看看能找几张
      result[i] = parseInt(n / allMoney[i]);
      n = n - result[i] * allMoney[i];   // 更新剩下需要找的钱
    } else {
      // 否则不能找
      result[i] = 0;
    }
  }
  
  return result;
}

const result = changeMoney(126, allMoney);
console.log(result);   // [1, 0, 1, 1, 1]

