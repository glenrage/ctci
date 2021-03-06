'use strict';

import { getLength } from './helpers';
//Implement a function to check if a linked list is a palindrome.

/**
 * First find out the length of the list, then walk through half of the list
 * pushing the values onto a stack. Once the middle is reached if the list had
 * an odd length then skip the middle element. After that walk to the end of the
 * list and compare node values to a value popped off the stack, if no mismatches
 * then the list is a palindrome.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(N)
 */
export function isPalindromeStack(list) {
  // since we only put half the items on the stack it shouldn't be possible
  // for there to be anything left in the stack so it should always be empty
  // as such this check isn't really necessary and this could just be return true
}

/**
 * First find out the length of the list, then walk to the middle of the list.
 * Once the middle is reached if the list had an odd length then skip the middle
 * element. Walk through the remainder of the list reversing the nodes until the
 * end is reached. Now start walking one pointer from the start of the list and
 * another from the end of the list walking towards the middle. Compare values
 * while moving towards the middle. Reverse the second half of the list back to
 * its original order while moving towards the middle.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */

// RECURSIVE SOLUTION
export function isPalindromeRecursive(list) {
  const palindrome = recursiveIsPalindrome(list, getListLength(list));
  return palindrome.result;
}

function recursiveIsPalindrome(list, length) {
  // If length is even
  if (!list || length === 0) return { node: list, result: true };
  else if (length === 1)
    // If length is odd
    return { node: list.next, result: true };

  const compareNodes = recursiveIsPalindrome(list.next, length - 2);
  if (!compareNodes.result || !compareNodes.node) return compareNodes;

  compareNodes.result = list.value === compareNodes.node.value;
  compareNodes.node = compareNodes.node.next;

  return compareNodes;
}
