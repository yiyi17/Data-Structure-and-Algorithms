Array.prototype.insertSort = function() {
  for (let i = 1; i < this.length; i++) {
    const temp = this[i];
    let j = i;
    while (j > 0) {
      // 大的数往后移动一位
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j--;
    }
    // 将初始值插入的地方
    this[j] = temp;
  }
  return this;
};
const arr = [5, 4, 3, 2, 1];

const res = arr.insertSort();
console.log(res);
