'use strict';

/**
rotate matrix - given an image represented by NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. can u do this in place?

 * Go through the matrix diagonally from 0,0 until half way through (one less
 * where odd N). For each diagonal starting point move through matrix along row
 * until length - starting index. For each index in the matrix go through all 4
 * sides moving items along one place.
 *
 * N = dimension of matrix
 * Time: O(N^2)
 * Additional space: O(1)
 *
 * @param  {array} matrix NxN matrix to rotate in place
 * @return {array}        Rotated matrix, same object as input
 */
export function rotateMatrix(matrix) {

}
