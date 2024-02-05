// 两个递增数组合并成一个
const arr1 = [1,2,3,4,5,6]
const arr2 = [4,5,6,7,8]

console.log(fn(arr1, arr2));

// 空间复杂度O(m+n),时间复杂度O(m+n)log(m+n)
function fn(arr1, arr2) {
  const arr = arr1.concat(arr2)
  return arr.sort((a,b) => a-b)
}



