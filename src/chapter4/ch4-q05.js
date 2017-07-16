'use strict';

/**
 * To check if a tree is a valid BST we need to check that all the values under
 * a node are within the ranges defined by the path we took to get there. For
 * example, initially the root can have any value, every time we go down a left
 * child that sets an upper bound on the valid values of their children by that
 * nodes value. Every time you travel down the right child you lower bound the
 * valid values of their children by that nodes value.
 *
 * N = |tree|
 * Time: O(N)
 * Additional space: O(lg N) - due to recursion. Assumes a balanced tree, worst
 * case is O(N)
 */
export function isValidBST(tree) {
  
}
