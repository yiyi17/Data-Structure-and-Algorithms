// 两个字符串相等

// 定义 str = [s, n] 表示 str 由 n 个字符串 s 连接构成。
// 例如，str == ["abc", 3] =="abcabcabc" 。
// 如果可以从 s2 中删除某些字符使其变为 s1，则称字符串 s1 可以从字符串 s2 获得。
// 例如，根据定义，s1 = "abc" 可以从 s2 = "abdbec" 获得，仅需要删除加粗且用斜体标识的字符。
// 现在给你两个字符串 s1 和 s2 和两个整数 n1 和 n2 。由此构造得到两个字符串，其中 str1 = [s1, n1]、str2 = [s2, n2] 。
// 请你找出一个最大整数 m ，以满足 str = [str2, m] 可以从 str1 获得。
// 示例 1：
// 输入：s1 = "acb", n1 = 4, s2 = "ab", n2 = 2
// 输出：2

/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 * @description 转变为计算 s1 中 s2 出现的次数，算上重复的n1和n2
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
  arr1 = s1.split('');
  arr2 = s2.split('');

  arr1;
  arr2;

  let index = 0; // 匹配s2字符串中的位置
  let cnt = 0; // 出现的总次数
  
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] == arr2[index]) {
        index++;
      }
      // 匹配一个，重置s2
      if (index == arr2.length) {
        index = 0;
        ++cnt;
      }
    }
  }
  return parseInt(cnt / n2);
};

console.log(getMaxRepetitions('acb', 4, 'ab', 2));
