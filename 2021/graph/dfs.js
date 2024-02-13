const graph = require('./graph')

// 深度优先遍历

dfsVisit(graph, 2);

function dfsVisit(graph, n) {
    const visited = new Set();
    visit(n);
    function visit(n) {
        console.log(n);
        // visited 记录访问过的节点
        visited.add(n);
        graph[n].forEach(element => {
            if(!visited.has(element)) {
                // 如果没有就递归访问
                visit(element)
            }
        });
    }
}

