'use strict';

/**
 * Finding the successor as a few different scenarios:
 *   1. Where a right child exists:
 *     a. If it has no left child then it is the successor.
 *     b. If it has a left child then keep following left child pointers until
 *     you've got the left most child, this is the successor.
 *   2. Where no right child exists:
 *     a. If this node is a left child then the successor is its parent.
 *     b. Otherwise follow parent pointers until we find a node that is a left
 *     child of its parent, then the parent is the successor.
 *
 * N = |tree|
 * Time: O(lg N) - assumes balanced tree, worst cast O(N)
 * Additional space: O(1)
 */
export function findSuccessor(node) {
  
}
