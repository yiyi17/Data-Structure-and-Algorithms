// 分发糖果

// n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

// 你需要按照以下要求，给这些孩子分发糖果：

// 每个孩子至少分配到 1 个糖果。
// 相邻两个孩子评分更高的孩子会获得更多的糖果。
// 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。


var candy = function(ratings) {
  if(ratings.length === 1) return 1
  const len = ratings.length
  const arr = new Array(len).fill(1)

  // 一次是从左到右遍历，只比较右边孩子评分比左边大的情况。
  for(let i = 1; i < len; i++) {
    if(ratings[i] > ratings[i - 1]) {
      arr[i] = arr[i - 1] + 1
    }
  }
  
  // 一次是从右到左遍历，只比较左边孩子评分比右边大的情况
  for(let j = len - 1; j > 0; j--) {
    if(ratings[j] < ratings[j - 1]) {
      arr[j - 1] = Math.max(arr[j - 1], arr[j] + 1)
    }
  }
  arr
  const sum = arr.reduce((a, b) => a + b)
  return sum
}


console.log(candy([1,2,87,87,87,2,1]));// 5
// 你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。