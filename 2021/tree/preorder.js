const bt = require('./bt')

// 先序遍历
// 访问根节点
// 左子树先序遍历
// 右子树先序遍历
// const preorder = (root) => {
//     if(!root) return;
//     console.log(root.val);
//     preorder(root.left);
//     preorder(root.right)
// }

// 非递归
const preorder = (root) => {
    if(!root) return;
   const stack = [root];
   while(stack.length) {
        const n = stack.pop()
        console.log(n.val);
        if(n.right) {
            stack.push(n.right)
        }
        if(n.left) {
            stack.push(n.left)
        }
    }
}

preorder(bt);