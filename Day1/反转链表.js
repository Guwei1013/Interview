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
var reverseList = function (head) {
  let lastNode = null;
  let curNode = head;
  while (curNode) {
    const nextNode = curNode.next;
    curNode.next = lastNode;
    lastNode = curNode;
    curNode = nextNode;
  }

  return lastNode;
};

// TODO 递归写法，没有完成
var reverseList = function(head) {
  if (head == null || head.next == null) {
      return head;
  }
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

/*  2025/04/06 挑战成功 */