/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k === 1) {
    return head;
  }

  let i = 1;
  let node = head;
  let end = null;
  let start = null;
  let newHead = null;

  while (node) {
    const nextNode = node.next;

    if (i % k === 1) {
      start = node;
    }

    if (i % k === 0) {
      if (i === k) {
        newHead = node;
      }

      let last = null;
      let cur = start;

      while (last !== node) {
        let next = cur.next;
        cur.next = last;
        last = cur;
        cur = next;
      }

      if (end) {
        end.next = node;
      } 
      end = start;
    }

    node = nextNode;
    i++;
  }
  
  if ((i - 1) % k !== 0) {
    end.next = start;
  }

  return newHead;
};