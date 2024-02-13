// 数组的排序

function fn(arr1, arr2) {
  let temp = 0;
  let res = arr2;
  while (arr1.length) {
    const num = arr1.shift();

    for (let i = temp; i < arr2.length; i++) {
      if (num <= arr2[i]) {
        // res = [num].concat(res);
        res.splice(i, 0, arr2[i]);
        temp = i;
        break;
      }
    }
  }
  console.log(res);
  return res;
}

fn([1, 3, 4], [1, 2, 3, 4, 5]);
