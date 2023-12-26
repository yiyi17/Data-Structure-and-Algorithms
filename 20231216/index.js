// 输入：
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
// 输出：
// [1, 2, 3, 6, 9, 8, 7, 4, 5];

function snailSort(arr) {
  const result = [];
  while (arr.length) {
    result.push(...arr.shift());
    result;
    if (arr.length && arr[0].length) {
      for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].pop());
      }
    }
    result;
    if (arr.length) {
      result.push(...arr.pop().reverse());
    }
    result;
    if (arr.length && arr[0].length) {
      for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i].shift());
      }
    }
    console.log(result);
  }
  console.log(result);
  return result;
}

snailSort([
  [1, 2, 3, 10],
  [4, 5, 6, 11],
  [7, 8, 9, 12],
  [14, 15, 16, 17],
]);
