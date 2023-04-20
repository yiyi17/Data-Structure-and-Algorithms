function reverseLinkList(head) {
    if (head == null) return head;

    var prev = null;
    var curr = head;

    while (curr!= null) {
        var temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev; 
}