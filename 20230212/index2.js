// [
//   [1,1,1,1,1]
//   [1,0,0,0,0]
//   [1,0,0,0,0]
//   [1,0,0,0,0]
// ]
// m=4,n=5
// 设置二维数组
/**
 * Creates a two-dimensional array filled with zeros.
 *
 * @param {number} m - The number of rows in the array.
 * @param {number} n - The number of columns in the array.
 * @returns {Array<Array<number>>} - The created array.
 */
function createArray(m, n) {
  // Create a row filled with zeros
  let row = new Array(n).fill(0);

  let arr = [];
  for (let i = 0; i < m; i++) {
    // Push the same row to the array multiple times
    arr.push(row);
  }

  return arr;
}

/**
 * Returns the total number of paths from (0,0) to (m,n) in a grid.
 *
 * @param {number} m - The number of rows in the grid.
 * @param {number} n - The number of columns in the grid.
 * @return {number} The total number of paths.
 */
function totalPath(m, n) {
  // Create a 2D array to represent the grid
  let arr = createArray(m, n);
  arr;

  // Set the base cases for the first row and column
  for (let i = 0; i < m; i++) {
    arr[i][0] = 1;
  }
  arr;

  arr[0] = new Array(n).fill(1);

  arr;

  // Calculate the number of paths for each cell based on the previous cells
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }

  // Return the number of paths from (0,0) to (m,n)
  return arr[m - 1][n - 1];
}

console.log(totalPath(7, 3));
