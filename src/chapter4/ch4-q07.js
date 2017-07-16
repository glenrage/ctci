'use strict';

/**
 * To get the order of the projects we just need to create a graph of the
 * projects and their dependencies and do a topological sort. To detect if an
 * order can be determined we also need to check for cycles as topological sort
 * will only work on DAGs.
 *
 * N = |projects|
 * M = |dependencies|
 * Time: O(N+M) - this assumes that the objects and we use as hashmaps and the
 * Set data type have operations that take O(1) time.
 * Additional space: O(N)
 */
export function buildOrder(projects, dependencies) {
  
}
