// 深度优先遍历
const json = {
    a: {b: {c:1}},
    d: [2,3]
  }
  
  const dfs = (n, path) => {
    console.log(n,path);
    // 所有key
    Object.keys(n).forEach(k => {
        dfs(n[k], path.concat(k))
    })
  }
  dfs(json, [])