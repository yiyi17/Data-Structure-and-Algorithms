// 二叉树的堂兄弟节点

function fn(root, x, y) {
  const parent = {};
  const depth = {};

  const dfs = (root, par) => {
    if (root) {
      par = par ? par : 0;
      parent[root.val] = par;
      depth[root.val] = 1 + depth[par.val];
      dfs(root.left, root);
      dfs(root.right, root);
    }
  };
  dfs(root);

  return depth[x] === depth[y] && parent[x] !== parent[y];
}

const root = [1, 2, 3, null, 4, null, 5],
  x = 5,
  y = 4;
console.log(fn(root, x, y));
