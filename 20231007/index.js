// flowers:开的花期
// people:人来的时间
// 输入：flowers = [[1,6],[3,7],[9,12],[4,13]], people = [2,3,7,11]


// 输出：[1,2,2,2] 人来时开的花数


function calculateFlowers(flowers, people) {
  const result = [];
  
  for (let j = 0; j < people.length; j++) {
    let count = 0;
    
    for (let i = 0; i < flowers.length; i++) {
      if (people[j] >= flowers[i][0] && people[j] <= flowers[i][1]) {
        count++;
      }
    }
    
    result.push(count);
  }
  
  return result;
}

//FIXME: 时间超出了,应该是有更快的方法
console.log(calculateFlowers([[1,6],[3,7],[9,12],[4,13]], [2,3,7,11]))