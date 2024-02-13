// a->b->c->d
function reverseList(head) {
  if(!head) return null

  let pre = null;
  let cur = head

  while(cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre

}