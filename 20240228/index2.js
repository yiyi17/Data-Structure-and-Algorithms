
// 2. 双指针

// 找出字符串中第一个匹配项的下标

function strStr(haystack, needle) {
  // 空字符
  if(needle === '') return 0;
  // 双指针
  let i = 0, j = 0;
  while(i < haystack.length) {
    if(haystack[i] === needle[j]) {
      j++;
      j
      i
      // needle 遍历完成 返回下标
      if(j === needle.length) return i - j + 1;
    } else {
      i
      j
      
      // i 回退
      i = i - j;
      i
      j = 0;
    }
    i++;
  }
  return -1;
}
const haystack = "sadbutsad", needle = "dk"

console.log(strStr(haystack, needle));//0