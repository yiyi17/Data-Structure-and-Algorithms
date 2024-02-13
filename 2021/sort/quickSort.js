// 快速排讯
// O(nlogn)时间复杂度
// 分：选择基准，分成两个子数组
// 解：递归的对两个子数组进行快速排序
// 合：对子数组进行排序

// arr 有序

Array.prototype.quickSort = function() {
  const rec = (arr) => {
    if (arr.length <= 1) return arr;
    const left = [];
    const right = [];
    const mid = arr[0];
    // 分区
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    // 合并
    return [...rec(left), mid, ...rec(right)];
  };
  const res = rec(this);
  res.forEach((n, i) => {
    this[i] = n;
  });
  //   console.log(res, this);
  return rec(this);
};

const arr = [6, 5, 4, 3, 2, 1];

const res = arr.quickSort();
console.log(res, arr);
