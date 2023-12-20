// 跳跃游戏2
// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

// 每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

// 0 <= j <= nums[i]
// i + j < n
// 返回到达 nums[n - 1] 的最小跳跃次数

var jump = function (nums) {
  let curIndex = 0;
  let nextIndex = 0;
  let steps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(nums[i] + i, nextIndex);
    nextIndex;
    curIndex;
    if (i === curIndex) {
      curIndex = nextIndex;
      steps++;
    }
  }

  return steps;
};

jump([2, 3, 1, 1, 4]);
