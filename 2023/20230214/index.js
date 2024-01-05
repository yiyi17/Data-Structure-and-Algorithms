// 最长公共子序列长度：动态规划

function computeLCS(){
  let length1 = A.length;
  let length2 = B.length;
  let result;

  let max = 0
  for(let i=0; i<=length1; i++){
      for(let j=0; j<=length2; j++){
          if(i===0 || j===0){
              result[i][j] = 0;
              continue;
          }
          if(A[i] === B[j]){
              result[i][j] = result[i-1][j-1] + 1;
          }else{
              result[i][j] = max(result[i-1][j], result[i][j-1]);
          }
          max = Math.max(max, result[i][j]);
      }
  }
  return max;
}