// 最大堆

// 最大堆
class MaxHeap {
  constructor(heap) {
      this.heap = heap;
      this.heapSize = heap.length;
      this.buildMaxHeap();
  }

  // 构建最大堆
  buildMaxHeap() {
    console.log(this.heapSize);
      for (let i = Math.floor(this.heapSize / 2) - 1; i >= 0; i--) {
          i
          this.maxHeapify(i);
      }
  }

  //将以i为根节点的子树调整为最大堆
  maxHeapify(index) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;
      if (left < this.heapSize && this.heap[left] > this.heap[largest]) largest = left;
      if (right < this.heapSize && this.heap[right] > this.heap[largest]) largest = right;
      if (largest !== index) {
          this.swapNum(index, largest);
          this.maxHeapify(largest);
      }
  }

  //交换i，j的值
  swapNum(i, j) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
      // [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  //插入一个数
  insert(num) {
      this.heap.push(num);
      this.heap.heapSize = this.heap.length;
      let index = this.heap.heapSize - 1;
      while (index != -1) {
          index = this.shiftUp(index);
      }
      console.log(this.heap);
  }

  //删除堆顶元素
  pop() {
      this.heap[0] = this.heap.pop();
      this.heapSize = this.heap.length;
      let index = 0;
      while (1) {
          let temp = this.shiftDown(index);
          if (temp === index) break;
          else index = temp;
      }
  }

  //堆排序
  heapSort() {
      while (this.heapSize > 1) {
          this.swapNum(0, this.heapSize - 1);
          this.heapSize -= 1;
          let index = 0;
          while (1) {
              let temp = this.shiftDown(index);
              if (temp === index) break;
              else index = temp;
          }
      }
      this.heapSize = this.heap.length;
  }

  //上浮操作 - 将当前节点与父节点进行比较，如果该节点值大于父节点值，则进行交换。
  shiftUp(index) {
      let parent = Math.ceil(index / 2) - 1;
      if (this.heap[index] > this.heap[parent] && parent >= 0) {
          this.swapNum(index, parent);
          return parent;
      }
      return -1;
  }

  // 下沉操作 - 将当前节点与左右子节点进行比较，如果该节点值不是最大，则进行交换
  shiftDown(index) {
      let left = Math.floor(index * 2) + 1;
      let right = left + 1;
      let largest = index;
      if (left < this.heapSize && this.heap[left] > this.heap[largest]) largest = left;
      if (right < this.heapSize && this.heap[right] > this.heap[largest]) largest = right;
      if (largest !== index) {
          this.swapNum(index, largest);
      }
      return largest;
  }

  peek() {
      return this.heap[0];
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
