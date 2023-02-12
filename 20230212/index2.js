
// 设置二维数组
function setArr(m,n) {
  let row = new Array(n).fill(0)
  let arr = []
  for(let i = 0; i < m; i++) {
    arr.push(row)
  }
  return arr
}

function totalPath(m,n) {
  let arr = setArr(m,n)

  console.log(arr);

  // 极值
  for(let i = 0; i < m; i++) {
    arr[i][0] = 1
  }
  for(let j = 0; j < n; j++) {
    arr[0][j] = 1
  }

  // 关系归纳
  for(let i = 1; i < m; i++){
    for(let j = 1; j < n; j++) {
      arr[i][j] = arr[i-1][j] + arr[i][j-1]
    }
  }

  return arr[m-1][n-1]
}

console.log(totalPath(7,3));