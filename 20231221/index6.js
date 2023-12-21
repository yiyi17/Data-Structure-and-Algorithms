// 爬楼梯

function climbStairs(n) {
  if (n <= 1) return 1;

  let p = 1,
    q = 1,
    r = p + q;
  for (let i = 2; i < n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  r;
  return r;
}

function climbStairs(n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    console.log(dp[i]);
  }
  console.log(dp[n]);
  return dp[n];
}

climbStairs(3);
