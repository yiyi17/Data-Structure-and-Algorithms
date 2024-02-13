// 广度优先遍历

// 又叫层次遍历，从上往下对每一层依次访问，在每一层中，从左往右（也可以从右往左）访问结点，访问完一层就进入下一层，直到没有结点可以访问为止
const root = require('./tree')

class Queue {
  constructor() {
    this.items = [];    
  }
  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0
  }
}

levelOrder(root.binaryTree)
// 1
// 2
// 3
// 4
// 5
// 6
function levelOrder(root) {
  const queue = new Queue();
  queue.enqueue(root);
  let a = 0
  let b = 0
  while(!queue.isEmpty()) {
    const n = queue.dequeue();
    console.log(n.val);
    if(n.left) {
      a++
      queue.enqueue(n.left);
    }
    if(n.right) {
      b++
      queue.enqueue(n.right);
    }
  }
  console.log(a, b);

  return a > b ? a : b

}