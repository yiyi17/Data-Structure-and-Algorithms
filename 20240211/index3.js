// 刘谦春晚魔术
/**
 * ABCDABCD
 * DABCDABC 对称
 * CXXXXXXC 前三张放中间，最上面和最下面的一样，中间可忽略（关键所在）
 * C 神秘牌
 * XXXXXC || XXXXC 男1女2扔掉
 * XXXXCX || XXCXX 见证奇迹的时刻 7 次之后，相当于1次||2次
 * XXCXX -> CXXX -> XXC -> CX -> C 好运留下来，烦恼丢出去
 * 
 */


// 1,2,3,4

let arr = [1,2,3,4]

// 打乱顺序
function shuffle(arr) {
  const result = []
  while(arr.length > 0) {
    const index = Math.floor(Math.random() * arr.length)
    result.push(arr[index])
    arr.splice(index, 1)
  }
  return result
}
arr = shuffle(arr)
arr


// 对折撕开，拼一起
// arr = arr.concat(arr)
arr = arr.concat(...arr)
arr

// 按照名字长度换顺序,依次放最下面
for(let i = 0; i < 3; i++) {
  arr.push(arr.shift())
}
arr

// 最上面的三张牌放中间
const top3 = arr.splice(0, 3)
arr
top3
const midRandom = Math.floor(Math.random()* arr.length - 1) + 1
midRandom
arr.splice(midRandom, 0, ...top3)
arr

// 取出第一张牌
const first = arr.shift()
first
arr

// 南方1北方2
const top2 = arr.splice(0, 2)
const midRandom2 = Math.floor(Math.random()* arr.length - 1) + 1
midRandom2
top2
arr
arr.splice(midRandom2, 0, ...top2)
arr

// 男生 1 女生 2,扔掉
arr.splice(0,1)
arr

// 见证奇迹的时刻,牌从上换到下
for(let i = 0; i < 7; i++) {
  arr.push(arr.shift())
}
arr

// 好运留下来、烦恼丢出去

while(arr.length > 1) {
  arr.push(arr.shift())
  arr.shift()
}
arr