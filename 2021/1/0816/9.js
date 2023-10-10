/**
 *
 *
 */
// 数组加和
function fn(arr, target) {
  const len = arr.len;
  const res = [];
  const map = new Map();

  arr.forEach((item) => {
    const temp = target - item;
    if (map.has(temp)) {
      res.push([item, map.get(temp)]);
    }
    map.set(item, item);
  });

  console.log(res);
  return res;
}

const arr = [15, 2, 7, 3, 11, 1];
const target = 18;
fn(arr, target);

// 输出[(3, 15)][(7, 11)];
