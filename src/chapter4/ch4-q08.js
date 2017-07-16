'use strict';

/**
 * The two given nodes could be anywhere within the tree and travelling upwards
 * we will eventually find the point at which the paths to the nodes diverge. As
 * we don't want to use extra space (so a map of nodes isn't an option) we first
 * need to figure out the different in depth of the two nodes. We then travel up
 * from the lower node, if there is one, so that we start at the same depth down
 * the path of each node. After we're at equal depths we just follow parent
 * pointers until we find a node that is common to both paths, that is the first
 * common ancestor.
 *
 * N = |tree|
 * Time: O(lg N) - assumes balanced tree, worst case O(N)
 * Additional space: O(1)
 */
export function findFirstCommonAnscestor(node1, node2) {
  
}
