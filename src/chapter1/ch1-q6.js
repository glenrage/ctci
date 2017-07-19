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

 // JS does not have a StringBuilder/StringBuffer style class for creating strings
 // string concatenation has been heavily optimised in JS implementations and
 // is faster than creating a string via an array then using a .join('') at the end

export function compressString(str) {
  if(!str) return str;

  let cStr = '';
for (let i = 0; i < str.length; ++i) {
  let char = str[i],
    start = i;
  while (i + 1 < str.length && char === str[i + 1]) {
    ++i;
  }
  // JS does not have a StringBuilder/StringBuffer style class for creating strings
  // string concatenation has been heavily optimised in JS implementations and
  // is faster than creating a string via an array then using a .join('') at the end
  cStr += char +  (i - start + 1) ;
}

return cStr.length < str.length ? cStr : str;
}

export function stringCompression2(str) {
  if (!str || str.length <= 2) return str;

  const letterGroups = str.match(/(.)\1*/g);
  let compressedString = '';

  letterGroups.forEach(group => {
    compressedString += group[0] + group.length;
  });

  return compressedString.length < str.length ? compressedString : str;
}
