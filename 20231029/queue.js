// 利用队列，每秒打印一个值

class Queue {
  constructor() {
    this.data = [];
  }
  enqueue(data) {
    this.data.unshift(data)
  }

  top() {
    return this.data[this.data.length - 1]
  }

  dequeue() {
    return this.data.pop()
  }  
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue);
setInterval(() => {
  console.log(queue.dequeue());
},1000)