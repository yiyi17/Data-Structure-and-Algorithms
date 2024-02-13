// 每隔1秒请求一次接口（可以用fetch('/getData'）模拟），次数达到6次或者后端返回res.complete == true停止；需要获取到最新的数据
let n = 0;
function fetch() {
  return new Promise((resolve) => {
    resolve(n++);
  });
}

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

async function getData() {
  let count = 0;
  let res;

  async function fetchData() {
    count++;
    res = await fetch("/getData");
    // console.log(res);
    if (count < 6 && res.complete !== true) {
      await sleep(1000);
      await fetchData();
    }
    console.log(4, res);
    return res;
  }

  const data = await fetchData();
  console.log(2, data);

  return data;
}

(async () => {
  const res = await getData();
  console.log(3, res);
})();
