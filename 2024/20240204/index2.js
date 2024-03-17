// 三角形最小路径和  
const triangle = [
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3]
]

console.log(fn(triangle));// 11
function fn(triangle) {
  let result = 0
  for(let i = 0; i < triangle.length; i++) {
    const min = Math.min(...triangle[i])
    result+=min
  }
  return result
}