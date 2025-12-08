/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  let getIsMatch = (s: string, p: string) => {
    if(p.length === 0) {
      return !s.length
    }
    let match = false
    if(s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
      match = true
    }
    if(p.length > 1 && p[1] === '*') {
      // 匹配 0 个或者多个
      return getIsMatch(s, p.slice(2)) || (match && getIsMatch(s.slice(1), p))
    }else {
      return (match && getIsMatch(s.slice(1), p.slice(1)))
    }
  }

  return getIsMatch(s, p)
};
// @lc code=end

