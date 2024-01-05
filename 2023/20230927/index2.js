// // while 循环 二分查找，最小值
function whileFn(arr, min) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor(right / 2);
  while (left <= right) {
    console.log(mid);
    if (arr[mid] === min) return arr[mid];
    if (arr[mid] > min) {
      right = mid - 1;
      mid = Math.floor((right + left) / 2);
    } else {
      left = mid + 1;
      mid = Math.floor((right + left) / 2);
    }
  }
  return -1;
}

console.log(whileFn([1, 2, 3, 4, 5], 7));
