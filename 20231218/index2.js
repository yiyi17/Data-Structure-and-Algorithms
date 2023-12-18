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

function restoreIpAddresses(s) {
  const result = []; // 用于存储结果的数组

  // 回溯函数
  function backtrack(s, path, segments) {
    // console.log(s);
    // console.log(path);;
    // segments;
    // 如果已经找到了 4 个片段，并且字符串 s 中的所有字符都被使用了
    if (segments === 4 && !s) {
      result.push(path.join('.'));
      return;
    }

    // 如果已经找到了 4 个片段，但是字符串 s 中还有字符剩余
    if (segments === 4 || !s) {
      return;
    }

    // 尝试所有可能的片段长度（1、2 或 3 个数字）
    for (let i = 1; i <= 3; i++) {
      // 如果片段长度超过了字符串 s 的长度，则跳过
      if (i > s.length) {
        continue;
      }
      // 如果片段以 0 开头但不是单个 0，则跳过
      if (i > 1 && s[0] === '0') {
        continue;
      }
      // 如果片段大于 255，则跳过
      if (parseInt(s.substring(0, i)) > 255) {
        continue;
      }

      // 将当前片段添加到路径中
      path.push(s.substring(0, i));
      // 递归地回溯剩余的字符串和更新后的路径
      backtrack(s.substring(i), path, segments + 1);
      // 从路径中移除当前片段以进行回溯
      path.pop();
    }
  }

  // 开始回溯
  backtrack(s, [], 0);

  return result;
}

const s = '25525522135';
console.log(restoreIpAddresses(s));
