// 151. 反转字符串中的单词

// 给你一个字符串 s ，请你反转字符串中 单词 的顺序。

// 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

// 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

// 输入：s = "the sky is blue"
// 输出："blue is sky the"

function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(' ')
}

const result = reverseWords(' the sky is  blue ')

result

// '   hello     world   ' => 'hello world'
