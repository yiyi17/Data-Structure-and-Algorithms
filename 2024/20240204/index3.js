// 跳跃游戏

const nums = [2,3,1,1,4]

// 贪心算法

console.log(jumpGame(nums));
// function jumpGame(arr) {
//   let end = arr.length - 1;

//   for (let i = arr.length - 2; i >= 0; i--) {
//     end
//     i
//     console.log(arr[i]);
//     if (end - i <= arr[i]) {
//       end = i;
//     }
//   }
//   end;
//   return end === 0;
// }

function jumpGame(arr) {
  let maxJumpIndex = 0

  for (let i = 0; i < arr.length; i++) {
    maxJumpIndex = Math.max(maxJumpIndex, arr[i] + i);
    maxJumpIndex
    if(maxJumpIndex >= arr.length - 1) {
      return true
    }
  }
  return false
}