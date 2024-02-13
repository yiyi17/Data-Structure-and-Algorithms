// 字符串的随机组合

// 回溯算法

function randomStr(str) {
  const res = [];

  const backtrack = (path) => {
    if (path.length === str.length) {
      res.push(path);
      return;
    }
    for (let i = 0; i < str.length; i++) {
      if (path.includes(str[i])) continue;
      backtrack(path + str[i]);
    }
  };

  backtrack("", 0);
  console.log(res);
  return res;
}

randomStr("abc");
