var ListNode = function (val, nextNode = null) {
  this.val = val;
  this.next = nextNode;
};

var MyLinkedList = function () {
  this.head = new ListNode(-1);
  this.tail = this.head;
  this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) return -1;
  let curr = this.head.next;
  let i = 0;
  while (i !== index) {
    curr = curr.next;
    i++;
  }
  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new ListNode(val);
  node.next = this.head.next;
  this.head.next = node;
  if (!node.next) this.tail = node;
  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new ListNode(val);
  this.tail.next = node;
  this.tail = node;
  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const node = new ListNode(val);
  if (index < 0 || index > this.length) return -1;
  if (index === 0) this.addAtHead(val);
  else if (index === this.length) this.addAtTail(val);
  else {
    let curr = this.head.next;
    let i = 0;
    while (i !== index - 1) {
      curr = curr.next;
      i++;
    }
    node.next = curr.next;
    curr.next = node;
    this.length++;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.length) return -1;
  if (index === 0) {
    this.head.next = this.head.next.next;
  } else {
    let curr = this.head.next;
    let i = 0;
    while (i !== index - 1) {
      curr = curr.next;
      i++;
    }
    curr.next = curr.next.next;
    if (index === this.length - 1) this.tail = curr;
  }
  this.length--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
