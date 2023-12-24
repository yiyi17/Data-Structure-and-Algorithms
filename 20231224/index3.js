// 74. 搜索二维矩阵
// 中等
// 相关标签
// 相关企业
// 给你一个满足下述两条属性的 m x n 整数矩阵：

// 每行中的整数从左到右按非严格递增顺序排列。
// 每行的第一个整数大于前一行的最后一个整数。
// 给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。

// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// 输出：true

const searchMatrix = function (matrix, target) {
  console.log(matrix, target);

  let leftIndex1 = 0,
    rightIndex1 = matrix.length - 1;

  while (leftIndex1 < rightIndex1) {
    //NOTE: 这里加 1 很关键
    let mid = Math.floor((rightIndex1 - leftIndex1 + 1) / 2) + leftIndex1;
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

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    11,
  ),
);
