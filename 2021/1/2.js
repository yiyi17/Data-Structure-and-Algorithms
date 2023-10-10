// 定时输出

function makeRepeat(fn, n, time) {
  return function timeMehtod(str) {
    const timer = setInterval(() => {
      n--;
      fn(str);
      if (n <= 0) {
        clearInterval(timer);
      }
    }, time);
  };
}

var repeat = makeRepeat(console.log, 4, 1000);
repeat("hello world");
