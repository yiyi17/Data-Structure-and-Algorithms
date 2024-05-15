// 回文子串

// 使用双指针

function fn(str) {
  let left = 0, right = str.length - 1
  while(left < right) {
    if(str[left] === str[right]) {
      left++
      right--
    } else {
      console.log('不是回文子串')
      return false
    }
  }
  return true
}

console.log(fn('abcba'));