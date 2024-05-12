

/**
 * 
 * @param a 
 * @param b 
 * @description 两数相加 特别大的值
 */
function sum(a,b){
  const len = Math.max(a.length,b.length);
  a = a.padStart(len, 0);
  b = b.padStart(len, 0);

  let result = ''
  for(let i = len - 1; i >= 0; i--){
    let sum = +a[i] + +b[i];
    if(sum >= 10){
      a[i - 1]++;
      sum -= 10;
    }
    result =  sum + result;
  }
  result
  return result
}
sum('9007199254740991','2');

/**
 * 笔记
 * Number.MAX_SAFE_INTEGER：最大安全整数，9007199254740991，+2、+4会出现异常
 * Number.MAX_VALUE：最大值，1.7976931348623157e+308
 */