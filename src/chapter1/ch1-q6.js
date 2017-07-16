'use strict';

/**
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
