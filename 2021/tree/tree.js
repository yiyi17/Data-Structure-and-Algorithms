class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const bt = new Node(1);
bt.left = new Node(2);
bt.right = new Node(3);
bt.left.left = new Node(4);
bt.left.right = new Node(5);
bt.right.left = new Node(6);
bt.right.right = new Node(5)

//         1
//     2       3
// 4       5 6       7

// console.log(JSON.stringify(bt, null, 2));

class TreeNode {
  constructor(value) {
    this.value = value
    this.children = []
  }
  appendChild(child) {
    this.children.push(child)
  }
}
const root = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
const grandchild1 = new TreeNode(4);
const grandchild2 = new TreeNode(5);
root.appendChild(child1);
root.appendChild(child2);
child1.appendChild(grandchild1);
child2.appendChild(grandchild2);

// console.log(JSON.stringify(root, null, 2));
//     1
//   2       3
// 4       5


module.exports = {
  binaryTree:bt,
  normalTree: root
};
