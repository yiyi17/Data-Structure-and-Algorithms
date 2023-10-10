function mergeArr(arr) {
  //   arr = Array.from(new Set(arr));
  //   console.log(arr);
  //   arr = ar.map((item) => {});
  const res = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const ele1 = arr[i];
    let count = 0;
    for (let j = 0; j < res.length; j++) {
      const ele2 = res[j];
      if (ele1[0] >= ele2[0] && ele1[0] <= ele2[1] && ele1[1] >= ele2[1]) {
        ele2[1] = ele1[1];
      } else if (
        ele1[1] >= ele2[0] &&
        ele1[1] <= ele2[1] &&
        ele1[0] <= ele2[0]
      ) {
        ele2[0] = ele1[0];
      } else {
        count++;
      }
    }
    if (count === res.length) {
      res.push(ele1);
    }
  }
  console.log(res);
  return res;
}

mergeArr([
  [1, 3],
  [2, 6],
  [10, 15],
  [9, 11],
  [1, 3],
]);
