/** @format */

// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Constraints:

// Time Complexity: O(log N)

function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  if (arr[leftIdx] === 0) {
    return arr.length;
  }

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal === 1 && arr[middleIdx + 1] === 0) {
      return arr.length - leftIdx - 1;
    } else if (middleVal === 1) {
      leftIdx = middleIdx + 1;
    } else if (middleVal === 0) {
      rightIdx = middleIdx - 1;
    }
  }

  // left and right pointers crossed, val isn't in arr
  return 0;
}

module.exports = countZeroes;
