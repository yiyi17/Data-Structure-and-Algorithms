// 单词拆分
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[i] == true) break;
      if (dp[j] == false) continue;

      const suffix = s.slice(j, i);
      console.log(i, j, suffix);

      if (wordSet.has(suffix) && dp[j] == true) {
        // 后缀部分是单词，且左侧子串[0,j-1]的dp[j]为真
        dp[i] = true;
        break;
      }
    }
  }
  dp;
  return dp[s.length];
};

(s = 'leetcode'), (wordDict = ['leet', 'code']);

wordBreak(s, wordDict);
