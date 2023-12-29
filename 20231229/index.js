// 102. 二叉树的层序遍历

// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]

const root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
// 输出：[[3],[9,20],[15,7]]

var levelOrder = function(root) {
  root
  const ret = [];
  if (!root) {
      return ret;
  }

  const q = [];
  q.push(root);
  q
  while (q.length !== 0) {
      const currentLevelSize = q.length;
      ret.push([]);
      for (let i = 1; i <= currentLevelSize; ++i) {
          const node = q.shift();
          ret
         console.log(node.val);
          ret[ret.length - 1].push(node.val);
          if (node.left) q.push(node.left);
          if (node.right) q.push(node.right);
          console.log(q);
      }
  }
  
  ret
  return ret;
};

levelOrder = function(root) {
  if(!root) return []
  const result = []
  
  const q = []
  q.push(root)

  while(q.length) {
    let currentSize = q.length
    result.push([])
    for(let i = 0; i < currentSize; i++) {
      const node = q.shift()
      result[result.length-1].push(node.val)
      if(node.left) q.push(node.left)
      if(node.right) q.push(node.right)
    }
  }
  result
  
  return result
}

levelOrder(root)