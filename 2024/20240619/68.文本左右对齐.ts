/*
 * @lc app=leetcode.cn id=68 lang=typescript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
const blank = (n): string => {
  return new Array(n).fill(' ').join('');
}
function fullJustify(words: string[], maxWidth: number): string[] {
  const ans:string[] = []
  let right = 0, n = words.length
  n
  while(true) {
    const left = right
    let sumLen = 0
    while(right < n && sumLen + words[right].length + right - left <= maxWidth) {
      sumLen += words[right].length
      right++
    }
    right

    if(right === n) {
      const s = words.slice(left).join(' ')
      ans.push(s+ blank(maxWidth - s.length))
      break
    }
    // 单词数
    const numWords = right - left
    // 空格数
    const numSpace = maxWidth - sumLen

    if(numWords === 1) {
      ans.push(words[left] + blank(numSpace))
      continue
    }

    const avgSpace = Math.floor(numSpace/(numWords - 1))
    const extraSpace = numSpace % (numWords - 1)
    const s1 = words.slice(left, left + extraSpace + 1).join(blank(avgSpace + 1))
    const s2 = words.slice(left + extraSpace + 1, right).join(blank(avgSpace))
    ans.push(s1 + blank(avgSpace) + s2)
  }

  
  return ans
};

let  words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
fullJustify(words, maxWidth)
// @lc code=end

