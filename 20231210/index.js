var removeDuplicates = function (nums) {
  const n = nums.length;
  if (n < 3) return n;
  let slow = 2,
    fast = 2;
  while (fast < n) {
    if (nums[fast] != nums[slow - 2]) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }

  return slow;
};

// 如果重复超过两个，则删除重复的， 数组输出不超过 2 个重复的个数
nums = [1, 1, 1, 2, 2, 2, 3];
console.log(removeDuplicates(nums)); // 5
