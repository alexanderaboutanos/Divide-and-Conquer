/** @format */

// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
// Constraints

// L       M        R
// [1,2,8,10,10,12,19]

// Time Complexity: O(log N)

function findFloor(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  if (val > arr[rightIdx]) {
    return arr[rightIdx];
  }
  if (val < arr[leftIdx]) {
    return -1;
  }

  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal > val && arr[middleIdx - 1] < val) {
      return arr[middleIdx - 1];
    } else if (middleVal < val) {
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

module.exports = findFloor;
