// 238. 除自身以外数组的乘积

// 输入: nums = [1,2,3,4]
// 输出: [24,12,8,6]

productExceptSelf([1, 2, 3, 4])

// 前缀之积*后缀之积
  // 1*1*4*3*2
  // 1*1*1*4*3
  // 1*1*2*1*4
  // 1*1*2*3*1
function productExceptSelf(nums) {
  const res = []
  // 前缀之积
  res[0] = 1
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1]
  }
  res
  // 后缀之积
  let right = 1
  for(let j = nums.length - 1; j >= 0; j--) {
    res[j] *= right
    right *= nums[j]
    right
  }
  res
  return res
}