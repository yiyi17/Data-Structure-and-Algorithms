// 循环转递归的互转

const arr = [1, 2, 3, 4, 5]
function sum(arr) {
  if(arr.length === 0) {
    return 0
  }
  return arr[0] + sum(arr.slice(1))
}
console.log(sum(arr));

// 公式

// for(初始值，条件，递增) {
//   // 循环体
// }

// 递归

// function fn() {
//   // 初始函数

//   function fn2(){
//     if(条件) {
//       return
//     }
//     // 递归函数
//     fn2()
//   }
// }