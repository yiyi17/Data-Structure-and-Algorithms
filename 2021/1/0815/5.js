const bt = require("./bt");

// 平衡二叉树

function isBalanced(root) {
  if (!root) return true;

  const rec = (root) => {
    if (!root) return true;
    const left = root.left;
    const right = root.right;
    const leftValue = rec(left);
    const rightValue = rec(right);
    if (
      leftValue.left === null &&
      leftValue.right === null &&
      (rightValue.right.right || rightValue.right.left)
    ) {
      return false;
    }

    if (
      rightValue.left === null &&
      rightValue.right === null &&
      (rightValue.right.right || rightValue.right.left)
    ) {
      return false;
    }
  };

  rec(root);
}

console.log(isBalanced(bt));
