'use strict';

/**
string compression - implement a method to perform basic string compression using the counts of repeated characters. For ex, the string aabcccccaaa would be a2b1c5a3. If the compressed string would not become smaller than the original string, your method should return the original string. assume the string has only uppercase and lowercase letters.

 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string} str [description]
 * @return {[type]}     [description]
 */
export function compressString(str) {

    // JS does not have a StringBuilder/StringBuffer style class for creating strings
    // string concatenation has been heavily optimised in JS implementations and
    // is faster than creating a string via an array then using a .join('') at the end

}
