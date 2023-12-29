// 二叉树的最大深度

// 输入：root = [1, 2, 2, 3, null, null, 5, 4, null, null, 4]
// 输出: 4

// 解释: 上面示例中的二叉树的最大深度是 4，沿着路径 1 -> 2 -> 3 -> 4 或 1 -> 2 -> 5 -> 4 到达叶节点的最长路径上有 4 个节点。

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4
      },
      right: null
    },
    right: null
  },
  right: {
    val: 2,
    left: null,
    right:{ 
      val: 5,
      left: null,
      right: {
        val: 4
      }
    }
  }
}

var maxDepth = function(root) {
  if(root === null) return 0
  let queue = []
  queue.push(root)
  let ans = 0
  while(queue.length) {
    let size = queue.length
    for(let i = 0; i < size; i++) {
      const node = queue.shift()
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    ans += 1
  }
  ans
  return ans
}


maxDepth(root)


