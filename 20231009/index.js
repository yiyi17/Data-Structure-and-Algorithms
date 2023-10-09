// 输入：num = 4325
// 输出：59
// 解释：我们可以将 4325 分割成 num1 = 24 和 num2 = 35 ，和为 59 ，59 是最小和。

function fn(num) {
  const arr1 = []
  const arr2 = []
  String(num).split('')
    .sort((a,b) => a-b)
    .forEach((item, index) => {
      if((index +1)%2 ===0) {
        arr1.push(item)
      }else {
        arr2.push(item)
      }
    })
  return Number(arr1.join('')) + Number(arr2.join(''))
}

console.log(fn(4325));