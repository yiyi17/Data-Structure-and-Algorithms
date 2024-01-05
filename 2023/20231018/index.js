// 执行 K 次 最大值: 
// 输入数组，执行 k 次，求最大值

// 每次执行将选择的指 x/3 向上取整
function maxCount(arr, k){
  let count = 0
  
  while(k > 0) {
    const max = Math.max(...arr)
    const index = arr.indexOf(max)
    count += max
    arr[index] = Math.ceil(max / 3)
    k--;
  }
  console.log(count);
}

maxCount([1,10,3,3,3],3)