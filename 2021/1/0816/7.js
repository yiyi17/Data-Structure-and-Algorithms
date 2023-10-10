// 爬楼梯

/*


输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶


*/
/**
 *
 * @param {*} n
 * @returns
 */
function fn(n) {
  if (n < 2) return 1;
  const dp = [1, 1];
  for (i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  console.log(dp[n]);
  return dp[n];
}

fn(3);
