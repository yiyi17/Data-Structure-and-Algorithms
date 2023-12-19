// 四数值和
// 输入：
// const nums = [1, 0, -1, 0, -2, 2];
// const target = 0;
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

var fourSum = function (nums, target) {
  const len = nums.length;
  const result = [];
  if (len < 4) return result;
  nums.sort((x, y) => x - y);

  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target)
      continue;
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue;

      let left = j + 1,
        right = len - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  result; // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
  return result;
};

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
fourSum(nums, target);
