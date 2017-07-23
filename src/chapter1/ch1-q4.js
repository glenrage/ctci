'use strict';

/**

Palindrome permutation - given a string, write a function to check if it is a permutation of a palindrome.

 * Go through characters in string and set flag to indicate if there is an
 * odd number of that character. If there is more than one character with an
 * odd number of occurences then it cannot be a palindrome.
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check as a character array
 * @return {boolean}      True if input string is a permutation of a palindrome (ignoring spaces), otherwise false
 */

export function isPalindromePermutationsSet(str) {
  if(!str) return false;

  let chars = new Set()
  for(let letter of str) {
    if(letter !== ' ') {
      if(chars.has(letter)) chars.delete(letter);
      else chars.add(letter)
    }
  }
  console.log(chars)
  return chars.size <= 1
}
