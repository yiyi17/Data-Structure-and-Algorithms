window.download = (url, params) => {
  return new Promise((resolve, reject) => {
    let t = setTimeout(() => {
      resolve(url);
    }, 300);
  });
};

const request = function(options = { pool: 5 }) {};

const requestAjax = request({ pool: 5 });

for (let i = 0; i < 20; i++) {
  requestAjax(`https://www.baidu.com/${i}`, {}).then((res) => {
    console.log(res);
  });
}


// 搜索的结果返回慢