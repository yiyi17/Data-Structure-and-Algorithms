// 新建队列，跟节点入队
// 队头出队 并访问
// 把对头没访问过的相邻节点入队

const graph = require('./graph')

console.log(graph);

class Queue {
    constructor() {
        this.items = []
    }
    enqueue(item) {
        this.items.push(item)
    }
    dequeue() {
        return this.items.shift()
    }
    isEmpty() {
        return this.items.length === 0
    }
}

bfsVisit(graph, 2);

function bfsVisit(graph, n) {
    const q = new Queue();
    const visited = new Set();

    // 入队一个节点
    q.enqueue(n);
    visited.add(n);

    while (!q.isEmpty()) {
        // 出队
        const n = q.dequeue();
        console.log(n);

        // 没访问过的相邻节点入队
        graph[n].forEach(c => {
            if (!visited.has(c)) {
                q.enqueue(c);
                visited.add(c);
            }
        });
    }
}

