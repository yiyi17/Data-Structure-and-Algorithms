function fn(n) {
  const res = [];

  const backtrack = (path, l) => {
    if (path.length === l) {
      if (path.reduce((previous, current) => previous + current) === n) {
        res.push(path);
      }
      return;
    }
    for (let i = n; i >= 1; i--) {
      backtrack(path.concat([i]), l);
    }
  };

  for (let i = 1; i <= n; i++) {
    backtrack([], i);
  }

  console.log(res);
  return res;
}
fn(4);
