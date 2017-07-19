'use strict';

/**

URLify - Write a method that replaces all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given teh true length of the string.


 * Count the number of spaces in the string to calculate the new length of the
 * string and move characters back where required replacing spaces with %20.
 *
 * N = |url|
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string[]} url URL string as a character arra which will be updated in place
 * @return {string[]}     Updated URL character array
 */

 export const URLify1 = (str) => str ? str.split(' ').join('%20') : str;

 export const URLify2 = (str) => str ? str.replace(/\s/g, '%20') : str;


  // add an extra 2 characters for each space
