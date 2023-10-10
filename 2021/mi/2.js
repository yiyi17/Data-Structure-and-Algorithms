// 数组乱序输出
// [1, 2, 3, 4] => [1, 3, 2, 4]
//                  => [4, 1, 2, 3]

// 1.倒序循环这个数组
// 2.取范围从1到n的随机数k
// 3.k与n交换
// 4.直到循环至数组的首个元素
Array.prototype.shuffle = function()  {
  for (let i = this.length - 1; i >=0; i--) {
    
    var randomIndex = Math.floor(Math.random() * (i+1))

    var temp = this[randomIndex]
    this[randomIndex] = this[i]
    this[i] = temp
  }

  return this;
}

console.log([1, 2, 3, 4].shuffle());


// function shuffle(arr) {
//     const temp =[]
//     while(arr.length) {
//         const index = Math.floor(Math.random()*(arr.length - 1))
//         temp.push(arr[index])
//         arr.splice(index, 1)
//     }
//     return temp;
// }

console.log(11,shuffle([1, 2, 3, 4]));