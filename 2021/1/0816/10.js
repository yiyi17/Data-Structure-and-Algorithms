// n 个有序数组，求第m大的数
function fn(arr, m) {
  // 数组合并
  for (let i = 0; i < arr.length - 1; i++) {
    const arr1 = arr[i];
    const arr2 = arr[i + 1];

    while (arr1.length) {
      const n = arr1.shift();
      for (let j = 0; j < arr2.length; j++) {
        if (n <= arr2[j]) {
          arr2.splice(j, 0, n);
          break;
        }
      }
    }
  }

  console.log(arr[arr.length - 1], arr[arr.length - 1][m - 1]);

  return arr[arr.length - 1][m - 1];
}

fn(
  [
    [1, 2, 3],
    [2, 3, 5],
  ],
  3
);
