// 冒泡排序

// 如果第一个比第二个大则交换，最后一个数最大的，

// 时间复杂度O(n^2)
Array.prototype.bubbleSort = function() {
   for(let i = 0; i < this.length - 1; i++) {
       // 冒泡区间变小，减去i个。
    for (let j = 0; j < this.length - 1 -i; j++) {
        const temp = this[j];
        if(temp > this[j + 1]) {
           this[j] = this[j+1]
           this[j + 1] = temp
        }
    }
   }
   return this
}

const arr =[5, 4,3,2,1]

const res = arr.bubbleSort()
console.log(res);