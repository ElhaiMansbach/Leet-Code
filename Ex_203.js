/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const listNode = new ListNode(0);
  let prev = listNode;
  prev.next = head;
  while (head) {
    if (head.val !== val) prev = head;
    else prev.next = head.next;
    head = head.next;
  }
  return listNode.next;
};

console.log(removeElements([1, 2, 6, 3, 4, 5, 6], 6));
