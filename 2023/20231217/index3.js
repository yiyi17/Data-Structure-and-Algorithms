// 跳跃游戏
// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

// 向前查找，谈心算法
function jumpGame(arr) {
  let end = arr.length - 1;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (end - i <= arr[i]) {
      end = i;
    }
  }
  end;
  return end === 0;
}

// 谈心算法，向后查找
function jumpGame(arr) {
  let maxJumpIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i <= maxJumpIndex) {
      maxJumpIndex = Math.max(maxJumpIndex, arr[i] + i);

      if (maxJumpIndex >= arr.length - 1) return true;
    }
  }

  return false;
}
