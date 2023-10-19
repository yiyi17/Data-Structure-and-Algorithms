// 使用 while 循环，分别从头打印数字和从尾部打印值
function whileFn(arr) {
  let left = 0;
  let right = arr.length - 1
  while(left <= arr.length - 1 & right >= 0) {
    console.log('left',arr[left]);
    console.log('right',arr[right]);
    left ++
    right --
  }
}

// 使用 while 循环，翻转数组
function whileFn(arr) {
  let left = 0;
  let right = arr.length - 1
  while(left !== right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }
  console.log(arr);
}

// while 循环 二分查找，最小值
function whileFn(arr,min) {
  let left = 0;
  let right = arr.length - 1
  let mid = Math.floor(right / 2)
  while(left <= right) {
    console.log(mid);
    if(arr[mid] === min) return arr[mid]
    if(arr[mid] > min) {
      right = mid - 1
      mid = Math.floor((right + left) / 2)
    } else {
      left = mid + 1
      mid = Math.floor((right + left) / 2)
    }
  }
  return -1
}


// 计算公式、循环跳出

whileFn([1,2,3,4,5],1)



