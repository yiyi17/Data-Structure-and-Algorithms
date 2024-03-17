
// 递归：可复用最小子问题、终止条件、递归调用

// 什么是递归: 函数自己调用自己,一般不知道子类或者父类的数量就使用递归
// 没有终止条件会导致栈溢出，size limit exceeded

// 概念简单，但是应用起来很难，因为递归是一种思维方式，不是一种语法，多看多练

// 递归求和
function sum(start, end) {
    if (start === end) {
        return start;
    }
    console.log(start, end)
    return start + sum(start + 1, end);
}

console.log(sum(1, 3))

// 生成树
const rootList = [
  {id: 1, parent: null, text: '1'},
  {id: 11, parent: 1, text: '1-1'},
  {id: 12, parent: 1, text: '1-2'},
  {id: 2, parent: null, text: '2'},
  {id: 21, parent: 2, text: '2-1'},
]

function toTree(rootList, id, list) {
  for(let item of rootList) {
    if(item.parent === id) {
      list.push(item)
    }
  }
  for(let i of list) {
    i.children = []
    toTree(rootList, i.id, i.children)
    if(i.children.length === 0) {
      delete i.children
    }
  }
  console.log(list);

  return list
}
console.log(toTree(rootList, null,[]));

// 1-100 求和
function sum2(n) {
  if(n === 1) {
    return 1
  }
  return n + sum2(n-1)
}

console.log(sum2(100))

// 菲波那切数列
function fib(n) {
  if(n === 1 || n === 2) {
    return 1
  }
  return fib(n-1) + fib(n-2)
}
console.log(fib(3));

// 爬楼梯
function climbStairs(n) {
  if(n === 1) {
    return 1
  }
  if(n === 2) {
    return 2
  }
  return climbStairs(n-1) + climbStairs(n-2)
}