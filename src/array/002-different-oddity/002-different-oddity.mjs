import { test } from '../../utils.mjs';

/**
 * Finds the index of a number that has a different oddity
 * compared to the other numbers in the string.
 *
 * @param {string} numberString - space-separated string of numbers
 * @returns {number} - index of the outlier number
 */
function findOutlier(numberString) {
  // create an array of parities (0 for even, 1 for odd)
  // Math.abs() to correctly handle negative numbers
  const parities = numberString.split(' ').map(n => Math.abs(Number(n) % 2));

  // take the first three elements to identify the dominant parity
  const sample = parities.slice(0, 3);
  const oddCountInSample = sample.reduce((sum, parity) => sum + parity, 0);

  // if the sample has one or zero odd numbers, the list is mostly even, target 1
  // otherwise, the list is mostly odd, target 0
  const targetParity = (oddCountInSample <= 1) ? 1 : 0;

  // find the index of the first number with the target parity
  return parities.indexOf(targetParity);
}

const input1 = '2 4 7 8 10';
test(findOutlier(input1), 2);

const input2 = '1 2 1 1';
test(findOutlier(input2), 1);

const input3 = '9 2 4 6 8';
test(findOutlier(input3), 0);

const input4 = '1 3 5 7 9 20';
test(findOutlier(input4), 5);

const input5 = '100 5 200';
test(findOutlier(input5), 1);

const input6 = '-2 -4 -5 -6 -8';
test(findOutlier(input6), 2);