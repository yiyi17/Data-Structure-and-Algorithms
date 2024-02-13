// 无序数组。有正有负，求和最大的子数组

function fn(arr) {
  // 子数组
  const len = arr.length;
  arr = arr.map((item) => {
    if (item >= 0) return item;
  });

  console.log(arr);
  const subArr = [];

  const backtrack = (path, l) => {
    if (path.length === l) {
      subArr.push(path);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (path.includes(arr[i])) continue;
      backtrack(path.concat([arr[i]]), l);
    }
  };

  for (let i = 1; i <= len; i++) {
    backtrack([], i);
  }

  subArr.sort((a, b) => {
    // console.log(a);
    const aSum = a.reduce((p, n) => p + n);
    const bSum = b.reduce((p, n) => p + n);
    return bSum - aSum;
  });
  console.log(subArr[0]);

  return subArr[0];
  //     for (let n = 0; n < subArr.length; n++) {
  //         const mid = Math.floor(subArr.length / 2)

  //   }

  // 和比较
}

fn([1, 2, -3]);
