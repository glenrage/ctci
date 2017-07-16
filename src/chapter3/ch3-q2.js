'use strict';

/**
 * MinStack maintains a current stack minimum by putting an object on the stack
 * that holds the value and the minimum at that time rather than just the value.
 * When items are popped the value is returned without the wrapping object. When
 * minimum is called we return the min property of the wrapping object.
 *
 * Time: push O(1), pop O(1), peek O(1), min O(1)
 * Additional space: push O(N), pop O(1), peek O(1), min O(1)
 * Additional space required in push to create wrapping object to hold min at
 * that point.
 */
export class MinStack {
  
}
