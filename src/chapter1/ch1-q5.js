'use strict';

/**
One away - there are 3 types of edits that can be performed on a string, insert a character, remove a charcter or replace a character. Given 2 strings, write a funciton to check if they are one or zero edits away.

 * Scan through both strings's at the same time, when a difference is
 * encountered:
 *   * if this is the first edit:
 *     * if strings are the same length then consider it a replacement
 *     * if strings are different lengths then consider it a delete from the longer string
 *   * if this is the second edit then return false
 *
 * N = max(|str1|, |str2|)
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string}  str1 The first string
 * @param  {string}  str2 The second string
 * @return {boolean}      True if strings are 0 or 1 edit apart, otherwise false
 */
 export function oneAway(str1, str2) {
   const str1Length = str1.length, str2Length = str2.length;

   if (Math.abs(str1Length - str2Length) > 1) return false;

   const isInsertion = str1Length < str2Length,
         isDeletedChar = !isInsertion && str1Length !== str2Length;

   let isEdited = false, i, x;

   for (i = x = 0; i < str1Length && x < str2Length; i++, x++) {
     if (str1[i] !== str2[x]) {
       if (isEdited) return false;
       if (isInsertion) i--;
       else if (isDeletedChar) x--;
       isEdited = true;
     }
   }

   return true;
 }
