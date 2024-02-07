// 树深度
const root = require('./tree')

function calculateDepth(node) {
  if (node === null) {
    return 0;
  }

  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
}


const depth = calculateDepth(root.binaryTree);
console.log("Depth of the binary tree:", depth);
