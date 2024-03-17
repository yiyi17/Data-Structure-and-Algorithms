// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。 

// 示例 1：

// 输入：s = "Hello World"
// 输出：5
// 解释：最后一个单词是“World”，长度为5。

function lengthOfLastWord(s) {
  let end = s.length - 1
  end
  while(s[end] === ' ') {
    end--
  }
  end
  let start = end
  start
  while(s[start] !== ' ' && start >= 0) {
    start--
  }

  return end - start
}
console.log(lengthOfLastWord("Hello World"));