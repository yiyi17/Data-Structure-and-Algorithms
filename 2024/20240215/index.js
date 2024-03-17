// 134. 加油站

// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

// 给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。

/**
 * 输入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
输出: 3
解释:
从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
因此，3 可为起始索引。
 */

// 0+3 = 3
// 3-1+4 = 6
// 6-2+5 = 9
// 9-3+1 = 7
// 7-4+2 = 5
// 5-5+3 = 3
// 从3号加油站出发，可以获得4升汽油，此时油箱有0+4=4升汽油


var canCompleteCircuit = function(gas, cost) {
  let k = 0, sum = 0;
  let arrs = [];
  
  // 先计算是否有解，没有直接返回 -1
  for (let i = 0; i< gas.length; i++) {
      arrs[i] = gas[i] - cost[i];
      sum += arrs[i];
  };
  if (sum<0) {
      return -1;
  };

  // 有解的情况下，计算从哪个点出发
  sum = 0;
  for (let i = 0; i < arrs.length + k; i++) {
      sum += arrs[i % arrs.length];
      
      // 小于0的时候，说明从k到i都不是起点，因为有解法贪心算法（负数的时候，直接就下一个）
      if (sum < 0) {
          k = i + 1;
          sum = 0;
      }
  };
  return k
};
gas = [2,3,4], cost = [3,4,3]
console.log(canCompleteCircuit([2,3,4,5],  [3,4,5,1,2]));
// function canCompleteCircuit(gas, cost) {
//     for(let i = 0; i < gas.length; i++) {
//       let j = i
//       let remain = gas[i]
//       // 判断是否够下一步
//       while(remain - cost[j] >= 0) {
//         remain = remain - cost[j] + gas[(j + 1) % gas.length]
//         // 下一站
//         j = (j + 1) % gas.length
//         // 如果回到了起点
//         if(j === i) {
//           return i
//         }
//       }
//     }
//     return -1
// }
