// this is not my code, just experiementing with it.
function reverse(head) {
    if (!head || !head.next) {
      return head;
    }
    let tmp = reverse(head.next);
    head.next.next = head;
    head.next = undefined;
    return tmp;
}
