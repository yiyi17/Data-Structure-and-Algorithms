// 数组螺旋输出
// 输入：
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
// 输出：
// [1,2,4,3,5,7,6,8,9]

// 0,0
// 0,1 1,0
// 0,2 1,1 2,0

// 1,2 2,1
// 2,2

function snailSort(arr) {
  let result = [];

  let n = 0,
    i = 0;

  // 递归
  while (i < arr[0].length) {
    result.push(arr[0][i]);
    let m = 0;
    n = i;
    while (n > 0) {
      n--;
      m++;
      result.push(arr[m][n]);
    }
    i++;
  }

  let j = 1;
  while (j < arr.length) {
    result.push(arr[j][arr[0].length - 1]);
    let x = j;
    let y = arr[0].length - 1;
    while (x < arr.length - 1) {
      x++;
      y--;
      result.push(arr[x][y]);
    }
    j++;
  }

  console.log(result);
  return result;
}

snailSort([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
