const allMoney = [100, 50, 20, 5, 1];  // 表示我们手上有的面值
function changeMoney(n, allMoney) {
  const length = allMoney.length;
  const result = [];    // 存储结果的数组，每项表示对应面值的张数
  for(let i = 0; i < length; i++) {
    if(n >= allMoney[i]) {
      // 如果需要找的钱比面值大，那就可以找，除一下看看能找几张
     const num = parseInt(n / allMoney[i]);
     n = n - num * allMoney[i];   // 更新剩下需要找的钱
     result.push(allMoney[i])
    } else {
      // 否则不能找
      // result[i] = 0;
    }
  }
  
  return result;
}

const result = changeMoney(99, allMoney);

console.log(result);   // [1, 0, 1, 1, 1]
