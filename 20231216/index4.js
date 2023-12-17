// 旋转数组
// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
// var rotate = function (nums, k) {
//   const n = nums.length;
//   const newArr = new Array(n);
//   for (let i = 0; i < n; i++) {
//     newArr[(i + k) % n] = nums[i];
//   }

//   for (let i = 0; i < n; i++) {
//     nums[i] = newArr[i];
//   }

//   return nums;
// };

const reverse = function (num, start, end) {
  while (start < end) {
    [num[start], num[end]] = [num[end], num[start]];
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

};

console.log(rotate([1, 2], 3));
console.log(rotate([1, 2, 3, 4, 5], 3));
