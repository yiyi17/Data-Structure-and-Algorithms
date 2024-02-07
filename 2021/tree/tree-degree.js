const tree = require('./tree')

// 求树的度
function getDegree(node) {
  if (node.children.length === 0) {
    return 0;
  }

  let degree = node.children.length;
  for (let i = 0; i < node.children.length; i++) {
    degree = Math.max(degree, getDegree(node.children[i]));
  }

  return degree;
}

//     1
//   2       3
// 4       5  

const degree = getDegree(tree.normalTree);
console.log("Degree of the tree:", degree);
