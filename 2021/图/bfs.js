const graph = require('./graph')

// 新建队列，跟节点入队
// 队头出队 并访问
// 把对头没访问过的相邻节点入队

const visited = new Set()
visited.add(2)

const q = [2]

while(q.length) {
    const n = q.shift()
    console.log(n)
    graph[n].forEach(c => {
        if(!visited.has(c)) {
            q.push(c)
            visited.add(c)
        }
    })
}