// 74. 搜索二维矩阵
// 中等
// 给你一个满足下述两条属性的 m x n 整数矩阵：

// 每行中的整数从左到右按非严格递增顺序排列。
// 每行的第一个整数大于前一行的最后一个整数。
// 给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。

// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// 输出：true

var searchMatrix = function (matrix, target) {
  console.log(matrix, target);

  let leftIndex1 = 0,
    rightIndex1 = matrix.length - 1;

  while (leftIndex1 < rightIndex1) {
    rightIndex1;
    leftIndex1;
    //NOTE: 这里加 1 很关键
    let mid = Math.floor((rightIndex1 - leftIndex1 + 1) / 2) + leftIndex1;
    console.log(mid);

    if (matrix[mid][0] === target) return true;

    if (matrix[mid][0] < target) {
      leftIndex1 = mid;
    } else {
      rightIndex1 = mid - 1;
    }
  }

  console.log(leftIndex1);

  let leftIndex2 = 0,
    rightIndex2 = matrix[leftIndex1].length - 1;
  while (leftIndex2 <= rightIndex2) {
    let mid = Math.floor((rightIndex2 - leftIndex2) / 2) + leftIndex1;
    mid;
    if (matrix[mid][leftIndex1] === target) return true;

    if (matrix[mid][leftIndex1] < target) {
      leftIndex2 = mid + 1;
    } else {
      rightIndex2 = mid - 1;
    }
  }

  return false;
};
// var searchMatrix = function (matrix, target) {
//   const m = matrix.length,
//     n = matrix[0].length;
//   let low = 0,
//     high = m * n - 1;
//   while (low <= high) {
//     const mid = Math.floor((high - low) / 2) + low;
//     mid;
//     n;
//     console.log(mid % n);
//     const x = matrix[Math.floor(mid / n)][mid % n];
//     if (x < target) {
//       low = mid + 1;
//     } else if (x > target) {
//       high = mid - 1;
//     } else {
//       return true;
//     }
//   }
//   return false;
// };

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13,
  ),
);

// cat cat what do you see?
// I  see a dog looking at me
// dog dog what do you see?
