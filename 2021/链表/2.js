function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// function arrayToList(array) {
//   // 数组转链表
//   let temp;
//   array.reverse().forEach((item, index) => {
//     // const o = {};
//     // o.val = item;
//     // o.next = temp || null;
//     temp = {
//       val: item,
//       next: temp || null
//     };
//   });

//   return temp;
// }

// 数组转链表
function arrayToList(arr) {
  // 首个节点
  // 首个节点被存储，并不断改变指针
  let firstNode = {
    val: arr[0],
    next: null,
  };
  let p = firstNode;
  arr.slice(1).forEach((item) => {
    const currentNode = {
      val: item,
      next: null,
    };
    p.next = currentNode;
    p = currentNode;
  });
  return firstNode;
}
const list = arrayToList([1, 2, 3, 4]);

console.log(JSON.stringify(list));

// reverseList([1, 2, 3, 4, 5]);
