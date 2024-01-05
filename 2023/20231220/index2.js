// 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。

// 根据维基百科上 h 指数的定义：h 代表“高引用次数” ，一名科研人员的 h 指数 是指他（她）至少发表了 h 篇论文，并且 至少 有 h 篇论文被引用次数大于等于 h 。如果 h 有多种可能的值，h 指数 是其中最大的那个。
var hIndex = function (citations) {
  const n = citations.length;
  const cnt = new Array(n + 1).fill(0);
  citations;
  cnt;

  for (const c of citations) {
    c;
    n;
    cnt[Math.min(c, n)]++; // 引用次数 > n，等价于引用次数为 n
  }

  cnt;

  let s = 0;
  for (let i = n; ; i--) {
    // i=0 的时候，s>=i 一定成立
    s += cnt[i];
    s;
    if (s >= i) {
      // 说明有至少 i 篇论文的引用次数至少为 i
      return i;
    }
  }
};

hIndex([3, 0, 6, 1, 5]);
