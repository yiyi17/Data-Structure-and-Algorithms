// 最大堆
class MaxHeap{
    constructor(heap = []){
      this.heap = heap
    }
    buildMinHeap(){
      for(let i = this.heap.length; i >= 0; i--){
        this.insert(this.heap[i])
      }
    }
    getParentIndex(i){
      return (i - 1) >> 1
    }
    getLeftIndex(i){
      return i * 2 + 1
    }
    getRightIndex(i){
      return i * 2 + 2
    }
    swap(i1, i2){
      let temp = this.heap[i1]
      this.heap[i1] = this.heap[i2]
      this.heap[i2] = temp
    }
    shiftUp(index){
      // 根节点，不需要移动
      if(index === 0) return
      const parentIndex = this.getParentIndex(index)
  
      // 父节点小，就交换
      if(this.heap[parentIndex] < this.heap[index]){
        this.swap(parentIndex, index)
        this.shiftUp(parentIndex)
      }
    }
  
    shiftDown(index){
      const leftIndex = this.getLeftIndex(index)
      const rightIndex = this.getRightIndex(index)
      // 左节点大
      if(this.heap[leftIndex] > this.heap[index]){
        this.swap(leftIndex, index)
        this.shiftDown(leftIndex)
      }
      // 右节点大
      if(this.heap[rightIndex] > this.heap[index]){
        this.swap(rightIndex, index)
        this.shiftDown(rightIndex)
      }
    }
    insert(value){
      this.heap.push(value)
      this.shiftUp(this.heap.length - 1)
    }
    // 删除堆顶
    pop(){
      this.heap[0] = this.heap.pop()
      this.shiftDown(0)
    }
    size() {
      return this.heap.length
    }
    // 获取堆顶
    peek() {
      return this.heap[0]
    }
  }

const h = new MaxHeap([1, 3, 2, 5]);
// h.insert(1);
// h.insert(3);
// h.insert(2);
// h.insert(5);
h

h.pop();

h

console.log(h.peek());

/**
 *     5
 *  3    2
 * 1
 */
