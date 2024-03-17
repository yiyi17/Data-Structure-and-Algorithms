// 递增数组合并为一个

function merge(arr1, arr2) {
  // const arr = arr1.concat(arr2);
  // return arr.sort((a, b) =>(a-b))
  let n = 0, m = 0
  while(n < arr1.length && m < arr2.length) {
    console.log(m,n);
    if(arr1[n] > arr2[m]) {
      arr1.push(arr2[m]);
      m++
    }else {
      n++
    }
  }
  return arr1
}

console.log(merge([1,2,3],[2,4,5]));


// 三角形最小路径和


// 跳跃游戏

