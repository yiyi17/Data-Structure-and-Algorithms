// 输入 5，
// 输出 [
//   [1],1
//   [1,1]2
//   [1,2,1],3
//   [1,3,3,1],4
//   [1,4,6,4,1]5
// ]


function handleArr(n){
  if(n < 0) return []

  const result = new Array(n)
  for(let i = 0; i < n; i++) {
    result[i] = []
    result[i][0] = 1
  }
  
  console.log(result);
  
  for(let m = 1; m < n; m++) {
    for(let k = 1; k < m+1; k++) {
      if(result[m-1][k]) {
        result[m][k] = result[m-1][k] + result[m-1][k-1]
      }else {
        result[m][k] = 1
      }
    }
  }

  console.log( result);

}

handleArr(5)

