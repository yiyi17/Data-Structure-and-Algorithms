// 调整数组顺序使奇数位于偶数前面(一)
// 输入一个长度为 n 整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前面部分，所有的偶数位于数组的后面部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

// 数据范围：，数组中每个数的值
// 要求：时间复杂度O(n) ，空间复杂度O(n)

// 输入：[1,2,3,4]
// 输出：[1,3,2,4]

function sortFn(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      result.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  result;
  return result;
}

// 进阶：时间复杂度O(n^2) ，空间复杂度O(1)
// 冒泡排序法
function sortFn(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      for (let j = 0; j < i; j++) {
        if (arr[j] % 2 === 0) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
  }
  arr;
  return arr;
}

sortFn([1, 2, 3, 4, 6, 7, 5, 8]); // [1,3,2,4]
