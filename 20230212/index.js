// 不同硬币面额 coins，求总 amount 需要的最少硬币数
// dp[0] = 0 金额为零时不需要硬币
// dp[n] = min(dp[n],dp[n-coin1] + 1，dp[n-coin2],...)  金额为n时，硬币数等于(n-coin)+1中所需硬币最少的组合


/**
 * Calculate the minimum number of coins needed to make up a given amount.
 * 
 * @param {number} amount - The target amount.
 * @param {number[]} coins - The available coins.
 * @returns {number} - The minimum number of coins needed, or -1 if it is not possible.
 */
function calculate(amount, coins) {
  // Initialize an array with length equal to the amount plus one and fill it with Infinity.
  let dp = new Array(amount + 1).fill(Infinity);
  
  // Set the value at index 0 to 0, as it requires no coins to make up the amount 0.
  dp[0] = 0;

  // Iterate through each value from 0 up to the target amount.
  for (let i = 0; i <= amount; i++) {
    // Iterate through each available coin.
    for (let coin of coins) {
      // If the current coin can be subtracted from the current value without resulting in a negative value.
      if (i - coin >= 0) {
        // Update the minimum number of coins needed to make up the current value.
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  // Return -1 if it is not possible to make up the target amount, otherwise return the minimum number of coins needed.
  return dp[amount] === Infinity ? -1 : dp[amount];
}



console.log(calculate(7, [2,4,5,6]));


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

