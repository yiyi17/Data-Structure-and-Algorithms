// 数组方法

const arr = [1,4,5,2,3,4,5]

// arr.copyWithin(2,0,3) // [1,4,1,4,5,4,5]
// arr

Array.prototype.myCpyWith = function(target, start, end) {
  this.splice(target, end - start, ...this.slice(start, end))
  return this
}

arr.myCpyWith(2,0,3)

arr