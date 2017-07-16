'use strict';

/**
 * The basic premise here is to get all permutations of each subtree's left and
 * right children. Then create a new list of all the permutations from combining
 * each permutation from the left subtree with each in the right subtree. The
 * new set of permutations all need to be prefixed with the current nodes value
 * as it must be added before its left or right children.
 *
 * The process of creating permutations requires combinging a list from the set
 * of left child permutations and those of the right child. Each permutation
 * needs to keep the items in their relative lists from their source lists.
 *
 * N = |tree|
 * Time: O(N!) - this isn't really accurate and is definitely a high upper bound.
 * Due to the fact that the permutations have some ordering required the true
 * number isn't just the normal way to count permutations.
 * Additional space: O(N!) - again like the time complexity this is a high upper
 * bound
 */
export function sequencesToCreateBST(tree) {
}
