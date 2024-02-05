// 中序遍历

// 根节点左子树进行中序遍历
// 访问根节点
// 对根节点的右子树进行中序遍历

const root = require('./tree');

const midOrder = (root) => {
    if(!root) return;
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}

// const midOrder = (root) => {
//     if(!root) return;
//     const stack = []
//     let p = root;
//    while(stack.length || p) {
//         while(p) {
//             stack.push(p)
//             p = p.left;
//         }
//         const n = stack.pop()
//         console.log(n.val);
//         p = n.right
//    }
    
// }

midOrder(root);