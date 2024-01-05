// 输入：nums = [-2,0,2], s = "RLL", d = 3
// 输出：8
// 解释：
// 1 秒后，机器人的位置为 [-1,-1,1] 。现在下标为 0 的机器人开始往左移动，下标为 1 的机器人开始往右移动。
// 2 秒后，机器人的位置为 [-2,0,0] 。现在下标为 1 的机器人开始往左移动，下标为 2 的机器人开始往右移动。
// 3 秒后，机器人的位置为 [-3,-1,1] 。
// 下标为 0 和 1 的机器人之间距离为 abs(-3 - (-1)) = 2 。
// 下标为 0 和 2 的机器人之间的距离为 abs(-3 - 1) = 4 。
// 下标为 1 和 2 的机器人之间的距离为 abs(-1 - 1) = 2 。
// 所有机器人对之间的总距离为 2 + 4 + 2 = 8 


function robot(nums, s, d) {
  const res = []
  while(d){
    d--
    for(let i = 0; i < s.length; i++){
      if(nums[i] === nums[i+1]){
        if(s[i] === 'L') s[i] = 'R'
        if(s[i] === 'R') s[i] = 'L'
      }
      if(s[i] === 'L'){
        nums[i] = nums[i]-1
       }else{
        nums[i] = nums[i] + 1
       }
    }
  }

  return nums
}

const nums = [-2,0,2]
const s = "RLL"
const d = 3
console.log(robot(nums, s, d));

let res=0
for(let i = 0; i < nums.length; i ++) {
  for(let j = i+1; j < nums.length; j++) {
    console.log(nums[i],nums[j]);
    res+= Math.abs(nums[i]-nums[j])
  }
}
console.log(res);