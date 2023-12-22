// 跳水板（Diving Board）
// 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为 shorter，长度较长的木板长度为 longer。你必须正好使用 k 块木板。编写一个方法，生成跳水板所有可能的长度。
// 返回的长度需要从小到大排列。
// Explain
// 示例：
// 输入：
// shorter = 1
// longer = 2
// k = 3
// 输出： {3,4,5,6}
// 提示：
// 0 < shorter <= longer
// 0 <= k <= 100000

function fn(shorter, longer, k) {
  let result = [];

  let shorterNum = k;
  let longerNum = 0;
  while (longerNum <= k) {
    result.push(shorterNum * shorter + longerNum * longer);
    shorterNum--;
    longerNum++;
  }
  result;
  return result;
}
fn(1, 2, 3);
