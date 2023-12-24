// 最小生成树
// 一个有 n 户人家的村庄，有 m 条路相互连接着。村里现在要修路，每条路都有一个成本价格，现在请你帮忙计算下，最少需要花费多少钱，就能让这 n 户人家连接起来。

//  cost 为一个二维数组，每个元素是一个长度为 3 的一维数组 a ，  a[0]和 a[1] 表示村庄 a[0] 和村庄 a[1] 有一条路，修这条路的成本价格为 a[2] 。

// 每户之间可能有多条道路连接，但不可能自己与自己相连。

// 示例1：
// 3,3,[[1,3,3],[1,2,1],[2,3,1]]

// 2;

// 示例2
// 2, 1, [[1, 2, 1]];
// 1

function minCostToConnectVillages(n, m, cost) {
  // 创建一个邻接矩阵来表示村庄之间的路连接情况
  const graph = new Array(n).fill(0).map(() => new Array(n).fill(Infinity));

  graph;
  cost;
  // 根据给定的成本数组更新邻接矩阵
  for (const [v1, v2, c] of cost) {
    v1;
    v2;
    c;
    graph[v1 - 1][v2 - 1] = c;
    graph[v2 - 1][v1 - 1] = c;
  }
  graph;

  // 创建一个数组用于记录已访问和未访问的村庄
  const visited = new Array(n).fill(false);
  visited[0] = true;

  let totalCost = 0; // 最小花费
  let count = 0; // 已连接的村庄数

  // 循环直到所有村庄都连接起来
  while (count < n - 1) {
    let minCost = Infinity;
    let minIndex = -1;

    // 在已访问的村庄中找到与未访问的村庄之间的最小成本路线
    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        for (let j = 0; j < n; j++) {
          if (!visited[j] && graph[i][j] < minCost) {
            minCost = graph[i][j];
            minIndex = j;
          }
        }
      }
    }

    if (minIndex !== -1) {
      visited[minIndex] = true;
      totalCost += minCost;
      count++;
    } else {
      break; // 没有找到可连接的村庄
    }
  }

  return totalCost;
}

// 示例测试
console.log(
  minCostToConnectVillages(3, 3, [
    [1, 3, 3],
    [1, 2, 1],
    [2, 3, 1],
  ]),
); // 输出 2
// console.log(minCostToConnectVillages(2, 1, [[1, 2, 1]])); // 输出 1
// fn([
//   [1, 3, 3],
//   [1, 2, 1],
//   [2, 3, 1],
// ]);
