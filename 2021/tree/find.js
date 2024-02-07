// 查找节点

const tree = require('./tree')

console.log(findNode(tree.normalTree, 5));
function findNode(tree, id) {
  if(tree.value === id) {
    console.log(tree.value);
    // tree.value = 100
    return tree
  }
  if(tree.children){
    for(let i = 0; i < tree.children.length; i++){
      const node = findNode(tree.children[i], id)
      if(node) return node
    }
  }
  return null
}