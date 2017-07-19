'use strict';

/**
String rotation - assume you have a method isSubString which checks if one word is a substring of another. Given 2 strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring(e.g "waterbottle" is a rotation or "erbottlewat")

 * Duplicate the rotated string, if the substring being searched is a different
 * rotation of the string then it will be a substring of the new string. Both
 * strings must be the same length.
 *
 * N = |str1|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string}  str1   First string
 * @param  {string}  str2   String to check if it is a rotated version of str1
 * @return {boolean}        True if str1 and str2 are rotated versions of eachother, otherwise false
 */
export function isRotatedSubstring(str1, str2) {
  if(!str1 || !str2) {
    throw new Error('invalid input')
  }

  if(str1.length !== str2.length) return false;

  return isSubstring(str1 + str1, str2)
}

// Implementation of isSubstring function which is defined in question
// can only be called once
function isSubstring(str, substr) {
  return str.includes(substr)
}

export function isRotatedSubstring2(str1, str2) {
  if (!str1 || !str1.length || !str2 || !str2.length) throw Error('invalid input');
  if (str1.length !== str2.length) return false;

  return (str1 + str1).indexOf(str2) > -1;
}
