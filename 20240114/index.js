// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

// 字母和数字都属于字母数字字符。

// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

// 输入: s = "A man, a plan, a canal: Panama"
// 输出：true
// 解释："amanaplanacanalpanama" 是回文串。

var isPalindrome = function(s) {
  const str = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
  str

  let str2 = ''
  const len = str.length
  for(let i = len-1; i >= 0; i--) {
    str2 += str[i]
  }
  
  str2
  
  return str === str2
  
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));


// reverse 改变原数组， 这里不可以用哦
//   const arr2 = arr.reverse()