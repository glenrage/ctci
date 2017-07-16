'use strict';

class Node {

}

/**
 * RandomNode routine first gets a random number between 1 and the number of
 * elements in the tree. Every node in the tree keeps track of the size of the
 * subtree that is it a part of (number of nodes in left and right subtrees
 * as well as itself). Using these counts we can go through the tree and find
 * the node whose index would match that random number if the trees values
 * where considered in order.
 *
 * If the random number is:
 *   1. smaller than the nodes left subtree size then go left.
 *   2. equal to the left subtree size + 1 then return current node.
 *   3. otherwise go right and subtract the left subtree size from the random
 *   	number as we have already skipped over that many values.
 *
 * N = |tree|
 * Time: insert O(lg N), delete O(lg N), find O(lg N), randomNode O(lg N) - this
 * assumes a balanced tree, otherwise all of these would be O(N) in the worst case
 * Additional space: insert O(N) - to hold values and keep track of subtree sizes
 * delete O(lg N), find O(1), randomNode O(1)
 */
export class RandomBinarySearchTree {
  
}
