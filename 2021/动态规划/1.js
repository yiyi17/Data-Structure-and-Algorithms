// 爬楼梯、斐波那契数列
// var climbStairs = function(n) {
//     if(n < 2) return 1;
//     const dp = [1,1]
//     for(let i = 2; i <= n; i++) {
//         dp[i] = dp[i-1] + dp[i-2]
//     }
//     return dp[n]
// };


var climbStairs = function(n) {
    if(n < 2) {return 1}
    const dp = [1,1]
    for (let i = 2; i <=n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}
const res = climbStairs(2)
console.log(res);
