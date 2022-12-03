// 洗牌算法

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 随机抽取
const len = arr.length
let arr2 = []
while(arr.length) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  const val = arr.splice(randomIndex, 1)
  arr2.push(val[0])
}

console.log(arr2);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 换位置
for(let i = 0; i < arr.length; i++) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
}

console.log(arr);