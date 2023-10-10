// 去重
const arr = [1, 1, 2, 3];
const arr2 = [...new Set(arr)];

// 判断元素是否在集合中
const set = new Set(arr);
const has = set.has(1);

// 求交集
const set2 = new Set([2, 3]);
const set3 = new Set([...set].filter((item) => set2.has(item)));


// 求差集合
const set4 = new Set([...set].filter((item) => !set2.has(item)));

console.log(set4);
