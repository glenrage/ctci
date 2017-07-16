'use strict';

/**
 * StackOfStacks uses multiple smaller stacks to hold values. New stacks are
 * created or dropped as required. popAt allows for an item to be popped from
 * any stack, when that occurs items from subsequent stacks are taken and moved
 * forward in the list of stacks so that there are no gaps.
 *
 * N = total number of items
 * M = size of smaller stack
 * Time: push O(1), pop O(1), popAt O(N)
 * Additional space: push O(1), pop O(1), popAt O(M)
 */
export class StackOfStacks {
  
}
