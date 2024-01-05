// 33. 搜索旋转排序数组

// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

 

// 示例 1：

// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 二分法
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
      // >> 1 相当于除以2向下取整
      let mid = (start + end) >> 1;
      mid
      if (nums[mid] === target) {
          return mid;
      }

      // 如果中间数小于最右边数，则右半段是有序的
      // 如果中间数大于最右边数，则左半段是有序的
      if (nums[mid] < nums[end]) {
          // 判断target是否在(mid, end]之间
          if (nums[mid] < target && target <= nums[end]) {
              // 如果在，则中间数右移即start增大
              start = mid + 1;
          } else {
              // 如果不在，则中间数左移即end减小
              end = mid - 1;
          }
      } else {
          // [start, mid)
          if (nums[start] <= target && target < nums[mid]) {
              end = mid - 1;
          } else {
              start = mid + 1;
          }
      }
  }

  return -1;
};



var findMin = function(nums) {
    if(!nums.length) return null
    if(nums.length === 1) return nums[0]
    let left = 0, right = nums.length - 1, mid
    if(nums[right] > nums[left]) return nums[0]
    while(left <= right) {
        mid = left + Math.floor((right - left)/2)
        mid
        if(nums[mid] > nums[mid+1]) {
            return nums[mid+1]
        }
        if(nums[mid] < nums[mid-1]) {
            return nums[mid]
        }
        
        console.log(nums[mid], nums[0])
        
        if(nums[mid] > nums[0]) {
            left = mid+ 1
        }else {
            right = mid - 1
        }
    }
    return null
} 


const nums = [6,7,0,1,2,3,4,5], target = 0
console.log(search(nums, target));

console.log(findMin(nums));

// 而乱序的条件则是：first element > last element
