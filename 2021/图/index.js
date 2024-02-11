// 图

//   B
// /   \
// A    C

const adjacenyList = {
  'A': ['B'],
  'B': ['A', 'C'],
  'C': ['B']
}

console.log(adjacenyList['A']);

const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0]
]

console.log(matrix[0][1]);