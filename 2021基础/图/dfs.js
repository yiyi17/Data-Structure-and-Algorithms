const graph = require('./graph')

// 深度优先遍历
const visited = new Set()

const dfs = (n) => {
    console.log(n);

    visited.add(n)
    graph[n].forEach(element => {
        if(!visited.has(element)) {
            dfs(element)
        }
    });

}

dfs(2)