// 最长递增子序列

// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(1);
  dp[0] = 1;
  let max = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    max = Math.max(max, dp[i]);
  }

  dp;
  max;
  return max;
};
lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]); //6
