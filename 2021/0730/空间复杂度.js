// 空间复杂度

// O(1):只声明了单个变量
let i =0
i += 1

// O(n)：声明数组，占用n个内存单元
const list = []
for(let i = 0; i < n; i++) {
    list.push(i)
}

// O(n^2): 矩阵 二维数组 行列、栅格
const matrix = []
for(let i = 0; i < n; i++) {
    matrix.push([])
    for(let j = 0; j < n; j ++) {
        matrix[i].push(j)
    }
}
