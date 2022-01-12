/** @format */

// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0

// L        M        R
// L    M   R
// [15, 18, 2, 3, 6, 12]

//   L     M       R
//         L   M   R
// ([7, 9, 11, 12, 5])

function findRotationCount(arr) {
  return findRotatePoint(arr) + 1;
}

function findRotatePoint(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal > arr[middleIdx - 1] && middleVal > arr[middleIdx + 1]) {
      // GOT IT!
      return middleIdx;
    } else if (middleVal > arr[leftIdx]) {
      leftIdx = middleIdx;
    } else if (middleVal < arr[leftIdx]) {
      rightIdx = middleIdx;
    } else return -1;
  }
}

module.exports = findRotationCount;
