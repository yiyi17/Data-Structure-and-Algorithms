
// 不改变顺序、空间复杂度不增加
// function handleArr(arr) {
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (arr[i] === 0 && arr[i + 1] !== 0) {
//       arr.splice(i, 1);
//       arr.push(0);
//     }else if (arr[i] ===0 && arr[i + 1] ===0){
//       arr.splice(i, 2);
//       arr =  arr.concat([0,0]);
//     }
//   }
//   return arr
// }


function handleArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length;j++) {
     if(arr[i] === 0 && arr[j] !== 0) {
      [arr[j], arr[i]] = [arr[i], arr[j]]
      break
     } 
    }
  }
  return arr
}
console.log(handleArr([3,0,0,12,0,1,0]));





// function sortZero(nums) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     if (nums[left] === 0) {
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//       right--;
//     } else {
//       left++;
//     }
//   }

//   return nums;
// }



// console.log(sortZero([1, 2, 3, 0, 5, 70, 0, 0, 123, 2, 0, 44, 0, 0]));