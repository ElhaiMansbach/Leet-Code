/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;
  let pointer = head;
  while (pointer.next) {
    if (pointer.val !== pointer.next.val) {
      pointer = pointer.next;
    } else {
      pointer.next = pointer.next.next;
    }
  }
  return head;
};

console.log(deleteDuplicates([1, 1, 2, 3, 3]));