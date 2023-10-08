// 输入：
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// 输出：
// [null, 1, 1, 1, 2, 1, 4, 6]

// 解释：
// StockSpanner stockSpanner = new StockSpanner();
// stockSpanner.next(100); // 返回 1
// stockSpanner.next(80);  // 返回 1
// stockSpanner.next(60);  // 返回 1
// stockSpanner.next(70);  // 返回 2
// stockSpanner.next(60);  // 返回 1
// stockSpanner.next(75);  // 返回 4 ，因为截至今天的最后 4 个股价 (包括今天的股价 75) 都小于或等于今天的股价。
// stockSpanner.next(85);  // 返回 6

class StockSpanner {
  constructor(){
    this.array = [];
  }
  next(num) {
    this.array.unshift(num);
    if(this.array.length === 1) {
      return 1;
    }
    const index = this.array.findIndex(item => num - item < 0);
    return index

  }
}

// [100,80,60,70,60,75,85]
// [1, 1, 1, 2, 1, 4, 6]


// [60,70,60,80,100]

// 1-0
// 1-0
// 2-0

const stockSpanner = new StockSpanner()
console.log(stockSpanner.next(100)); // 1
console.log(stockSpanner.next(80)); // 1
console.log(stockSpanner.next(60)); // 1
console.log(stockSpanner.next(70)); // 2
console.log(stockSpanner.next(70)); // 3
console.log(stockSpanner.next(60)); // 1
console.log(stockSpanner.next(75)); // 5
console.log(stockSpanner.next(85)); // 7