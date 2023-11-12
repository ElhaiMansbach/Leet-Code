/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let slow = head,
    fast = head.next;
  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let half2 = reverseList(slow.next);
  slow.next = null;

  let max = 0;

  while (head && half2) {
    max = Math.max(max, head.val + half2.val);
    head = head.next;
    half2 = half2.next;
  }
  return max;
};

function reverseList(list) {
  let prev = null,
    curr = list;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
