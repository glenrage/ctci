'use strict';

/**
 * Uses two different queues one for dogs and one for cats. Each entry is
 * assigned a unique identifier which allows dequeueAny to determine which of
 * the two queues to dequeue an item from.
 *
 * N = number of animals
 * Time: enqueue O(1), dequeue O(1), dequeueAny O(1)
 * Additional space: enqueue O(N), dequeue O(1), dequeueAny O(1)
 * Additional space required to hold unique id per animal.
 */
export class AnimalShelter {
  
}
