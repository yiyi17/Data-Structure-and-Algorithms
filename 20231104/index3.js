var removeElement = function(nums, val) {
  let count = 0
  while(count < nums.length) {
      if(nums[count] === val) {
          nums.splice(count, 1)
      }else {
        count++
      }
  }
  
  nums
  
  return nums.length
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));