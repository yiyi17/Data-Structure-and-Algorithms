
// 计算[1,n]之间能被 3 5 7 整除的所有的整数之和

function sum(n) {
  let sum = 0

  for (let i = 1; i <= n; i++) {
    if(n%3 === 0 || n%5 === 0 || n%7 === 0) {
      console.log(i);
      sum += i
    }
  }

  return sum
}

console.log(sum(7));// 21