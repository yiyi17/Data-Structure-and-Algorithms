// 查找节点的路径

const tree = require('./tree');

console.log(findPath(tree.binaryTree, 5));

function findPath(root, target) {
  if (!root) return null;
  if (root.value === target) return [root.value];
  let left = findPath(root.left, target);
  if (left) {
    left.unshift(root.value);
    return left;
  }
  let right = findPath(root.right, target);
  if (right) {
    right.unshift(root.value);
    return right;
  }

  return null;
}