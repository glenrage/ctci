'use strict';

import { createNode } from './helpers';

//sum lists: u have two numbers represented by a linked list, where each ndde contains a single digit. The digits are stored in reverse order, such as that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

/**
 * Walk through both lists in step summing each digit. Where the sum is greater
 * than 10 then maintain a carry value. Where one list is longer than the other
 * then copy the rest of the digits across adding any carry values.
 *
 * N = max(|list1|, |list2|)
 * Time: O(N)
 * Additional space: O(N) - algorithm doesn't require additional storage in
 * general, additional space is used to create the new list.
 */
export function sumListsReverseOrder(list1, list2) {
  let head = { next: null},
    tail = head,
    carry = 0,
    node1 = list1,
    node2 = list2,
    sum;

    while (node1 && node2) {
      sum = node1.val + node2.val + carry;
        if(sum >= 10) {
          carry = 1;
          sum -= 10;
        } else {
          carry = 0;
        }
        tail = tail.next = createNode(sum);
        node1 = node1.next;
        node2 = node2.next;
    }

    node1 = node1 || node2;
    while(node1) {
      sum = node1.val + carry;
      if (sum >= 10) {
        carry = 1;
        sum -= 10;
      } else {
        carry = 0;
      }
      tail = tail.next = createNode(sum);
      node1 = node1.next;
    }

    if (carry > 0) {
      tail.next = createNode(carry);
    }

    return head.next;

}
