'use strict';

/**
 * To find all the paths where node values add up to a given sum we need to
 * travel all paths of the tree and basically look upwards from the current node
 * summing up the values. Where the sum matches the requested sum then increment
 * counter. Even if we match the requested sum or go over we still need to keep
 * going up the path as negative values are also allowed.
 *
 * N = |tree|
 * Time: O(N lg N) - assuming a balanced tree, worst case O(N^2)
 * Additional space: O(lg N) - assuming a balanced tree, worst case O(N)
 */
export function findPathWithSum(tree, value) {
  
}
