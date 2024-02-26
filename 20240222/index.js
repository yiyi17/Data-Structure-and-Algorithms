var convert = function(s, numRows) {

  const arr = new Array(numRows).fill('')
  arr
  let m = 0;
  let n = 0
  console.log(arr[0]);
  for(let j = 0; j < s.length; j++) {
    if(m === 0) {
      n++
    }
    if(m === numRows-1) {
      n++
    }
    arr[m]+=s[j]

    if(n%2===1) {
      m++
    }else {
      m--
    }
  }
  return arr.join('')
};

const str = 'PAYPALISHIRING', numRows = 4;

console.log(convert(str, numRows)); // PINALSIGYAHRPI