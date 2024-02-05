const tree = require('./tree')
// 先序遍历
// 访问根节点
// 左子树先序遍历
// 右子树先序遍历
const preOrder = (root) => {
    if(!root) return;
    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right)
}

// 非递归
// const preOrder = (root) => {
//     if(!root) return;
//    const stack = [root];
//    while(stack.length) {
//         const n = stack.pop()
//         console.log(n.value);
//         if(n.right) {
//             stack.push(n.right)
//         }
//         if(n.left) {
//             stack.push(n.left)
//         }
//     }
// }

preOrder(tree);