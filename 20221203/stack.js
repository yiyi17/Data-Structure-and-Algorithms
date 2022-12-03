/**
 * push() 添加一个新元素到栈顶位置。
  pop() 移除栈顶的元素，同时返回被移除的元素。
  peek() 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
  isEmpty() 如果栈里没有任何元素就返回 true，否则返回 false。
  size() 返回栈里的元素个数。这个方法和数组的 length 属性类似。
  toString() 将栈结构的内容以字符串的形式返回。
 */

class Stack {
  constructor() {
    this.items = []
  }

  // 入栈
  push(item) {
    this.items.push(item)
  }

  // 出栈
  pop() {
    return this.items.pop()
  }

  // 查看栈顶
  peek() {
    return this.items[this.items.length - 1]
  }

  // 是否为空
  isEmpty() {
    return this.items.length === 0
  }

  // 栈中元素数
  size() {
    return this.item.length
  }

  // toString 放回
  toString() {}
}

// 利用栈结构的特点封装实现十进制转换为二进制的方法。



