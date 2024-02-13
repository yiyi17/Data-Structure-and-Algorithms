// 将一组区间中所有重叠的区间进行合并，例如
// 输入：[[1,3],[2,6],[15,18],[8,10],[10,11],[7,8]]
// 输出：[[1,6],[15,18],[7,11]]

function mergeArr(arr) {
  const res = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    const ele1 = arr[i];
    let count = 0;
    for (let j = 0; j < res.length; j++) {
      const ele2 = res[j];
      if (ele1[0] >= ele2[0] && ele1[0] <= ele2[1]) {
        ele2[1] = ele1[1];
      } else if (ele1[1] >= ele2[0] && ele1[1] <= ele2[1]) {
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
  [15, 18],
  [8, 10],
  [10, 11],
  [7, 8],
]);
