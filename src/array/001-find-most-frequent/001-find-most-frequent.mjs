import { test } from '../../utils.mjs';

/**
 * Finds how often the most frequent element appears in the union of two sorted arrays.
 *
 * @param {number[]} firstArray - sorted array of numbers
 * @param {number[]} secondArray - second sorted array of numbers
 * @returns {number} - frequency of the most frequent element
 */
function findMostFrequent(firstArray, secondArray) {
  let pointer1 = 0;
  let pointer2 = 0;
  let maxCount = 0;
  let currentCount = 0;
  let currentElement;

  // loop as long as there are elements in at least one array
  while (pointer1 < firstArray.length || pointer2 < secondArray.length) {
    let nextElement;

    // determine the next smallest element from the two arrays
    const isArrOneExhausted = pointer1 >= firstArray.length;
    const isArrTwoExhausted = pointer2 >= secondArray.length;

    if (
      !isArrOneExhausted && 
      (isArrTwoExhausted || firstArray[pointer1] <= secondArray[pointer2])
    ) {
      nextElement = firstArray[pointer1];
      pointer1++;
    } else {
      nextElement = secondArray[pointer2];
      pointer2++;
    }

    // check if we are starting a new sequence of numbers
    if (nextElement !== currentElement) {
      // before resetting, check if the last count was a new max
      maxCount = Math.max(maxCount, currentCount);
      // reset for the new element
      currentElement = nextElement;
      currentCount = 1;
    } else {
      currentCount++;
    }
  }

  // final check for the last sequence counted
  return Math.max(maxCount, currentCount);
}

const array1 = [1, 3, 3, 5, 8, 8];
const array2 = [3, 5, 5, 8, 8, 8];
test(findMostFrequent(array1, array2), 5);

const array3 = [2, 2, 5, 5, 5, 9];
const array4 = [];
test(findMostFrequent(array3, array4), 3);