// O(nlogn)时间复杂度

// 归并排序
// 数组从中间一分为二
// 对子数组进行合并排序
// 合并子数组
Array.prototype.mergeSort = function() {
  // 分 递归
  const rec = (arr) => {
    // arr为1个返回arr
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const orderLeft = rec(left);
    const orderRight = rec(right);
    const res = [];
    // 合并
    while (orderRight.length || orderLeft.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
      } else if (orderLeft.length) {
        res.push(orderLeft.shift());
      } else if (orderRight.length) {
        res.push(orderRight.shift());
      }
    }
    return res;
  };

  const res = rec(this);
  res.forEach((n, i) => {
    this[i] = n;
  });
  return rec(this);
};

const arr = [5, 4, 3, 2, 1];

const res = arr.mergeSort();
console.log(res, arr);
