/**
 * enqueue(element) 向队列尾部添加一个（或多个）新的项。
  dequeue() 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
  front() 返回队列中的第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息与 Map 类的 peek 方法非常类似）。
  isEmpty() 如果队列中不包含任何元素，返回 true，否则返回 false。
  size() 返回队列包含的元素个数，与数组的 length 属性类似。
  toString() 将队列中的内容，转成字符串形式。
 */

class Queue {
  constructor() {
    this.items = []
  }

  // 入队
  enqueue(item) {
    this.items.push(item)
  }

  // 移除队列第一个
  dequeue() {
    return this.items.shift()
  }

  // 查看队头
  front() {
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  toString() {
    return this.items.join(' ')
  }


}


/**
 * 使用队列实现小游戏：击鼓传花。
  *分析：传入一组数据集合和设定的数字 number，循环遍历数组内元素，遍历到的元素为指定数字 number 时将该元素删除，直至数组剩下一个元素。
 */

const names = ["lily", "lucy", "tom", "tony", "jack"];
const name = passGame(names, 5);
console.log("击鼓传花", name); //--> lily


function passGame(nameList, number) {
  const queue = new Queue()

  for(const name of nameList) {
    queue.enqueue(name)
  }

  let a = 0

  while(a < number) {
    a++
    queue.enqueue(queue.dequeue())
  }

  return queue.front()
}