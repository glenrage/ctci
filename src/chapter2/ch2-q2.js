'use strict';

import { getLength } from './helpers';

/**
 * Walk one pointer ahead k nodes first then create a second pointer to the
 * start of the list. Walk both pointers until the first one hits the end of the
 * list, at that point the second pointer will be pointing to the kth to last
 * node.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */
export function kthToLastTwoPointers(list, k) {

}

/**
 * Determine the length of the input list. Subtract k from the calculated length
 * and skip that many nodes from the start of the list. That node is the kth to
 * last.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */
export function kthToLastLength(list, k) {

}
