// 判断是否数组单词的缩写
// 输入：words = ["alice","bob","charlie"], s = "abc"
// 输出：true
// 解释：words 中 "alice"、"bob" 和 "charlie" 的第一个字符分别是 'a'、'b' 和 'c'。因此，s = "abc" 是首字母缩略词。

function fn(words, s) {
  let str = '';
  for (let i = 0; i < words.length; i++) {
    str += words[i][0];
  }
  console.log(s === str);
  return s === str;
}

fn(['alice', 'bob', 'charlie'], 'abc');
