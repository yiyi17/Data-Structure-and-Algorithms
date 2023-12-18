// 数字字符串转化成IP地址
// 现在有一个只包含数字的字符串，将该字符串转化成IP地址的形式，返回所有可能的情况。
// 例如：
// 给出的字符串为"25525522135",
// 返回["255.255.22.135", "255.255.221.35"]. (顺序没有关系)

// 数据范围：字符串长度
// 要求：空间复杂度 ,时间复杂度

// 注意：ip地址是由四段数字组成的数字序列，格式如 "x.x.x.x"，其中 x 的范围应当是 [0,255]。

// "25525522135"
// ["255.255.22.135","255.255.221.35"]

var restoreIpAddresses = function (s) {
  const SEG_COUNT = 4;
  const segments = new Array(SEG_COUNT);
  const ans = [];

  const dfs = (s, segId, segStart) => {
    // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
    if (segId === SEG_COUNT) {
      if (segStart === s.length) {
        ans.push(segments.join('.'));
      }
      return;
    }

    // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
    if (segStart === s.length) {
      return;
    }

    // 由于不能有前导零，如果当前数字为 0，那么这一段 IP 地址只能为 0
    if (s.charAt(segStart) === '0') {
      segments[segId] = 0;
      dfs(s, segId + 1, segStart + 1);
      return;
    }

    // 一般情况，枚举每一种可能性并递归
    let addr = 0;
    for (let segEnd = segStart; segEnd < s.length; ++segEnd) {
      addr = addr * 10 + s.charAt(segEnd) * 1;
      if (addr > 0 && addr <= 255) {
        segments[segId] = addr;
        dfs(s, segId + 1, segEnd + 1);
      } else {
        break;
      }
    }
  };

  dfs(s, 0, 0);
  return ans;
};

restoreIpAddresses = function restoreIpAddresses(s) {
  const SEG_COUNT = 4;
  const segments = new Array(SEG_COUNT);
  const result = [];

  function dfs(s, index, start) {
    if (index === SEG_COUNT) {
      if (start === s.length) {
        result.push(segments.join('.'));
      }
      return;
    }

    if (start === s.length) return;

    if (s.charAt(0) == '0') {
      segments[index] = '0';

      dfs(s, index + 1, start + 1);
      return;
    }

    let addr = 0;
    for (let i = start; i < s.length; i++) {
      addr = addr * 10 + s.charAt(i) * 1;
      if (addr > 0 && addr <= 255) {
        segments[index] = addr;
        dfs(s, index + 1, i + 1);
      }
    }
  }

  dfs(s, 0, 0);
  return result;
};

const s = '25525522135';
console.log(restoreIpAddresses(s));

// let n = 0;

// for (let i = 0; i < s.length; i++) {
//   n = n * 10 + s.charAt(i) * 1;
//   n;
// }
