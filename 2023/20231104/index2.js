// 合并两个数组，输入的两个数组是有序的，升序，合并完成后仍然有序

var merge = function (nums1, m, nums2, n) {
  nums1;
  m;
  nums2;
  n;

  let p1 = m - 1,
    p2 = n - 1;
  let cur;
  let tail = m + n - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--];
    } else if (p2 === -1) {
      cur = nums1[p1--];
    } else if (nums1[p1] > nums1[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[tail--] = cur;
  }
  nums1;

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
