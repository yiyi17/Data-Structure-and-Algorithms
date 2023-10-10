// 首个不重复字符串索引
function fn(str) {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], 1);
    } else {
      map.set(str[i], 0);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 0) {
      return i;
    }
  }
  return -1;
}

console.log(fn("loveleetcode"));
