// 买卖股票的最佳时机，只能买入一次卖出一次，计算最大收益
const prices = [8, 9, 2, 5, 4, 7, 1];
// 5
// 空间复杂度 O(1),时间复杂度 O(n)
const maxProfit = (prices) => {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  return max;
};

console.log(maxProfit(prices));
