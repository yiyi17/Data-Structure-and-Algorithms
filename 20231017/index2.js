
// 不改变顺序、空间复杂度不增加
function handleArr(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if(arr[i] === 0) {
      arr.push(0);
      arr[i] = undefined
    }
  }
  return arr.filter(item => item !== undefined)
}

console.log(handleArr([3,0,0,12,0,1]));