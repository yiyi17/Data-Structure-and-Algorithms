// 后序遍历

// 根节点左子树进行后续遍历
// 根节点右子树进行后续遍历
// 根节点

const root = require('./tree');

const postOrder = (root) => {
    if(!root) return;
    postOrder(root.left)
    postOrder(root.right)
    console.log(root.val);
}

// const postOrder = (root) => {
//     if(!root) return;
//    const outputStack = [];
//    const stack = [root];
//    while(stack.length) {
//         const n = stack.pop()
//         outputStack.push(n)
//         if(n.left) {
//             stack.push(n.left)
//         }
//         if(n.right) {
//             stack.push(n.right)
//         } 
//     }
//     while (outputStack.length) {
//         const n = outputStack.pop()
//         console.log(n.val);
//     }
// }
postOrder(root.binaryTree);