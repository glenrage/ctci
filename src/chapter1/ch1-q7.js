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
  if(!matrix || !matrix.length) throw Error('invalid matrix')

  const len = matrix.length;

  for(let layer = 0; layer < len / 2; layer++) {
    const firstLayer = layer,
          lastLayer = len - 1 - layer;

        for(let i = layer; i < lastLayer; i++) {
          const offset = i - layer,
                top = matrix[firstLayer][i];

          //left -> top
          matrix[firstLayer][i] = matrix[lastLayer - offset][firstLayer];
          //bottom -> left
          matrix[lastLayer - offset][firstLayer] = matrix[lastLayer][lastLayer - offset];
          //right -> bottom
          matrix[lastLayer][lastLayer - offset] = matrix[i][lastLayer];
          //top -> right
          matrix[i][lastLayer] = top;
    }
  }
  return matrix;
}
