/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Helper function to reverse a linked list
function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}

var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }

  // Step 1: Find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the linked list
  let secondHalf = reverseList(slow.next);
  slow.next = null;

  // Step 3: Compare the reversed second half with the first half
  while (head && secondHalf) {
    if (head.val !== secondHalf.val) return false;
    head = head.next;
    secondHalf = secondHalf.next;
  }
  return true;
};

console.log(isPalindrome([1, 2, 2, 1]));
