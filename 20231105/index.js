// 利用指针删除重复元素


// var removeDuplicates = function(nums) {
//   let n = 0
//   while(n<nums.length) {
//     if(nums[n] === nums[n+1]) {
//       nums.splice(n,1)
//     }else {
//       n++
//     }
//   }
//   nums
// };

var removeDuplicates = function(nums) {
  const n = nums.length;
  if (n === 0) {
      return 0;
  }
  let fast = 1, slow = 1;
  while (fast < n) {
      if (nums[fast] !== nums[fast - 1]) {
          nums[slow] = nums[fast];
          ++slow;
      }
      ++fast;
  }
  nums= nums.slice(0, slow)
  nums
  return slow;
}

console.log(removeDuplicates([0,1,1,2,2,3]));

