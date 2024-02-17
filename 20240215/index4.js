// 14. 最长公共前缀

// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
longestCommonPrefix(["flower", "flow", "flight"])
function longestCommonPrefix(arr) {
    if (arr.length === 0) return ''
    let res = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let j = 0
        for (; j < res.length && j < arr[i].length; j++) {
            if (res[j] !== arr[i][j]) break
        }
        j
        res
        res = res.substr(0, j)
        if (res === '') return res
    }
    res
    return res
}