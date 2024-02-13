// b中存在多少个a中的字符串

// a生成has map，查询b的字符串是否存在map中
function str(a, b) {
  const map = new Map();
  let res = 0;
  // a转为map
  for (let i = 0; i < a.length; i++) {
    map.set(a[i], 0);
  }
  // 对b进行遍历，查看map中是否存在b[j]
  for (let j = 0; j < b.length; j++) {
    if (map.has(b[j])) {
      res++;
      // map.set(b[j], map.get(b[j] + 1));
    }
  }
  return res;
}

const J = "aA";
const S = "aAAbbbbb";

console.log(str(J, S));
