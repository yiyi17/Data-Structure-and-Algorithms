// 输出一个整数的各个位数

function printNum(x) {
  while (x > 0) {
    console.log(x % 10);
    x = Math.floor(x / 10);
  }
}

printNum(123);
