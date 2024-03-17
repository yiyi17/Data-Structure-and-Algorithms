// 链表右侧如果有更大的就删除掉

var removeNodes = function(head) {
  console.log(head);
  // 如果是最后一个节点，直接返回
  if(!head || !head.next) return head;
  
  // 获取当前节点之后的最大节点
  const next = removeNodes(head.next);

  console.log(next, head);
  
  // 如果当前head之后存在比head大的节点，返回最大的节点
  if(next.val > head.val) return next;
  
  // 否则，将head之后（不包含head）最大的节点放置在当前节点后
  console.log(next,head);
  head.next = next;
  
  // 返回head，此时的head为从当前节点往后的最大节点
  return head;
};

var removeNodes = head => {
  if(!head || !head.next) return head

  const next = removeNodes(head.next)

  if(head.val < next.val) return next

  head.next = next

  return head
}
// 5,2,13,2,8
const head = {
  val: 5,
  next: {
    val: 2,
    next: {
      val: 13,
      next: {
        val: 2,
        next: {
          val: 8,
          next: null
        }
      }
    }
  }
}
console.log(removeNodes(head));