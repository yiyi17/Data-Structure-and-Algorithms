
// 不改变顺序、空间复杂度不增加
function handleArr(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0 && arr[i + 1] !== 0) {
      arr.splice(i, 1);
      arr.push(0);
    }else if (arr[i] ===0 && arr[i + 1] ===0){
      arr.splice(i, 2);
      arr =  arr.concat([0,0]);
    }
  }
  return arr
}

console.log(handleArr([3,0,0,12,0,1,0]));