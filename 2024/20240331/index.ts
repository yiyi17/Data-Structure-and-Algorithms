// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return ''
  if(strs.length === 1) return strs[0]
  let result = ''
  const str0 = strs[0]
  for(let i = 0; i < str0.length; i++) {
    for(let j = 1; j < strs.length; j++) {
      if(strs[j][i] !== str0[i]) {
        return result
      }
      if(j === strs.length - 1) result += str0[i]
    }
  }
  return result
};



console.log(longestCommonPrefix(["flower","flow","flight"]));
