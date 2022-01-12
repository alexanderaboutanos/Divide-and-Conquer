/** @format */

// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

function sortedFrequency(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  if (arr[leftIdx] > val || arr[rightIdx] < val) {
    return -1;
  }

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;
    } else {
      while (arr[leftIdx] !== middleVal) {
        leftIdx = leftIdx + 1;
      }
      while (arr[rightIdx] !== middleVal) {
        rightIdx = rightIdx - 1;
      }
      return rightIdx - leftIdx + 1;
    }
  }

  return -1;
}

module.exports = sortedFrequency;
