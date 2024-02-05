// 深度优先遍历
// 对每一个可能的分支路径深入到不能再深入为止，而且每个结点只能访问一次

// 二叉树的深度优先遍历比较特殊，可以细分为先序遍历、中序遍历、后序遍历

const tree  =require('./tree')

deepOrder(tree, [])
function deepOrder(root, path){
    if(!root) return;
    console.log(root.value, path);
    deepOrder(root.left, path.concat(root.value))
    deepOrder(root.right, path.concat(root.value))
}

