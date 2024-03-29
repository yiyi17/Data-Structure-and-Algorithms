// 最小堆类

class MinHeap {
  constructor(heap=[]) {
    // 声明堆
    this.heap = heap;
  }
  buildMinHeap(){
    for(let i = this.heap.length; i >= 0; i--){
      this.insert(this.heap[i])
    }
  }
  getParentIndex(i) {
    return (i - 1) >> 1;
  }

   getLeftIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  // 上移
  shiftUp(index) {
    if(index === 0) return;
    index
    const parentIndex = this.getParentIndex(index);
    parentIndex

    console.log(this.heap[parentIndex], this.heap[index]);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  
 
  // 下移
  shiftDown(index) {
    const letfIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[letfIndex] < this.heap[index]) {
      this.swap(letfIndex, index);
      this.shiftDown(letfIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  // 插入堆
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  // 数组尾部替换堆定，并进行下移操作
  pop() {
    // 相当于删除了堆定
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }
}

const h = new MinHeap()
h.insert(4)
h.insert(0)
h.insert(3)
h.insert(2)
h.insert(1)

h

//   0        0
// 2   3    1   3
// 4      4 2

console.log(h.peek());

