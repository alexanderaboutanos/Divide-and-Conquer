/** @format */

// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity: O(log N)

function findRotatedIndex(arr, val) {
  let rotatepoint = findRotatePoint(arr);

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  if (val > arr[rightIdx]) {
    rightIdx = findRotatePoint(arr) - 1;
  } else {
    leftIdx = findRotatePoint(arr);
  }

  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
    } else {
      // we found our value!
      return middleIdx;
    }
  }

  // left and right pointers crossed, val isn't in arr
  return -1;
}

function findRotatePoint(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal > arr[middleIdx - 1] && middleVal > arr[middleIdx + 1]) {
      // GOT IT!
      return middleIdx + 1;
    } else if (middleVal > arr[leftIdx]) {
      leftIdx = middleIdx;
    } else {
      rightIdx = middleIdx;
    }
  }
}

module.exports = findRotatedIndex;
