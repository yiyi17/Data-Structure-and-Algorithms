// 获取 Map 的 value 最大, 输出 key

const map = new Map();
map.set('a', 1).set('b', 2).set('c', 4);

const max = Math.max(...map.values());
max;

// 方案1
const maxKey = Array.from(map.keys()).find((key) => map.get(key) === max);
maxKey;

// 方案2
for (let [key, value] of map.entries()) {
  if (value === max) {
    console.log(key);
    return key;
  }
}
