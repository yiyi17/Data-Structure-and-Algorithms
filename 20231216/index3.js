// 接雨水：https://leetcode.cn/problems/trapping-rain-water/description/
// height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

// 双指针

function fn(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    leftMax = Math.max(height[left], leftMax);
    rightMax = Math.max(height[right], rightMax);
    if (leftMax < rightMax) {
      max += leftMax - height[left];
      left++;
    } else {
      max += rightMax - height[right];
      right--;
    }
  }
  max;
  return max;
}

fn([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
// 动态规划是啥？
