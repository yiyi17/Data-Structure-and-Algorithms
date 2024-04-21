/*
 * @lc app=leetcode.cn id=2423 lang=typescript
 *
 * [2423] 删除字符使频率相同
 */

// @lc code=start
function equalFrequency(word: string): boolean {
    const map = new Map()
    for(let i = 0; i < word.length; i++) {
      const n = map.get(word[i])
      map.set( word[i], n ? n+1 : 1)
    }

    for(let [key, val] of map) {
      const mapTemp = new Map(map)
      if(val - 1 === 0) {
        mapTemp.delete(key)
      }else {
        mapTemp.set(key, val -1)
      }
      
      if(new Set(Object.values(Object.fromEntries(mapTemp))).size === 1) {
        return true
      }
    }
    return false
};

console.log(equalFrequency("ddaccb"));

// @lc code=end

