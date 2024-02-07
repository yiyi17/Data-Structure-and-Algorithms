const tree = require('./tree')
//     8
// 2       3
// 4        5     

tree.normalTree.value = 8

// console.log(JSON.stringify(tree.normalTree, null, 2));
//深度优先遍历： 查找树上所有的符合条件的节点,不符合条件联调子节点一起丢弃
function treeFilter (tree, condition) {
  const result = {};
  if (condition(tree.value)) {
    result.value = tree.value;
    if (tree.children) {
      result.children = tree.children.map((child) => treeFilter(child, condition));
    }
  }else {
    return {value: null, children: []}
  }
  return result;
}

// Example usage: filter the tree to keep only even values
const filteredTree = treeFilter(tree.normalTree, (value) => value % 2 === 0);
console.log(JSON.stringify(filteredTree, null, 2));

//广度优先遍历：查找符合条件的节点，如果符合条件，返回节点的值，否则连同子节点一起丢弃
function treeFilter2 (tree, condition) {
  if(!condition(tree.value)) return {value: null, children: []}
  let node = [tree]
  while(node.length > 0){
    const n = node.shift()
    if(condition(n.value)) {
      console.log(n.value);
      // 如何删除树的节点
      if(n.children.length > 0){
        node.push(...n.children)
      }
    }else {
      // 如何删除树的节点
      n.value = null
      n.children = []
    }
  }

  return tree
}
const filteredTree2 = treeFilter2(tree.normalTree, (value) => value % 2 === 0);
console.log(JSON.stringify(filteredTree2, null, 2));