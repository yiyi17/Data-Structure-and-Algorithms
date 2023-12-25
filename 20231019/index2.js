// 同积元祖: 取数组中四个值，组合起来乘机相等

function handleArr(arr) {
  let count = 0;

  let left = 0;
  let right = arr.length - 1;

  while (left + 2 <= right) {
    const res = arr[left] * arr[right];
    for (let i = left + 1; i < right; i++) {
      if (arr.includes(res / arr[i])) {
        count += 8;

        res;
        left;
        right;
        i;
        console.log(arr.indexOf(res / arr[i]));

        break;
      }
    }
    left++;
  }
  console.log(count);
  return count;
}

// handleArr([2, 3, 4, 6]); //8
handleArr([1, 2, 4, 5, 10]); //16
