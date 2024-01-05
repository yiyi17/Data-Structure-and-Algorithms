
// 计算[1,n]之间能被 3 5 7 整除的所有的整数之和

function sum(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    if(i%3 === 0 || i%5 === 0 || i%7 === 0) {
      console.log('1----',i);
      sum += i
    }
  }
  return sum
}


function sumWhile(n) {
  let sum = 0

  while(n > 0) {
    if(n%3 === 0 || n%5 === 0 || n%7 === 0) {
      console.log('2----',n);
      sum += n
    }
    n--
  }
  return sum
}

// console.log(sumWhile(7));// 21
console.log(sum(7));// 21