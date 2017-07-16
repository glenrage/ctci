'use strict';

/**
 * To check if tree2 is a subtree of tree1 this algorithm basically searches
 * through tree1 looking for a potential root node (a node whose value matches
 * the root node of tree2). Once found go through node for node comparing from
 * that found root down to the nodes in tree2. If they all match then tree2 is
 * a subtree.
 *
 * N = |tree1|
 * M = |tree2|
 * Time: O(NM)
 * Additional space: O(lg N) - space cost is due to recursive nature of algorithm
 * and assumes a balanced tree, worst case is O(N)
 */
export function isSubtree(tree1, tree2) {
  
}
