/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

// O(n) time, O(1) solution
// linear, pattern-based solution (only works if array is sorted)
function repeatNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === i) return i;
  }
}

// O(n) time, O(1) solution
// linear, mathematical solution
function repeatNumbers(array) {
  // sum up all numbers in array
  const sum = array.reduce((acc, el) => acc + el);
  // find expected sum of numbers in range
  const expectedSum = ((array.length - 1) * array.length) / 2;
  // subtract two to find result
  return sum - expectedSum;
}

// O(n) time, O(1) space
// bitwise solution (works for unsorted arrays)
function repeatNumbers(array) {
  let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    result = result ^ i ^ array[i];
  }
  return result;
}

// ALTERNATIVE

// Brute Force - O(n^2) time, O(1) space
function repeatNumbers(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) return array[i];
    }
  }
}

// O(n) time, O(n) space
function repeatNumbers(array) {
  var store = {};

  for (var i = 0; i < array.length; i++) {
    if (array[i] in store) return array[i];
    store[array[i]] = true;
  }
}

// O(n) time, O(1) space
function repeatNumbers(array) {
  var expected = ((array.length - 1) * array.length) / 2;
  var actual = 0;

  for (var i = 0; i < array.length; i++) {
    actual += array[i];
  }

  return actual - expected;
}

// O(n) time, O(1) space
function repeatNumbers(array) {
  var result = 0;

  for (var i = 0; i < array.length; i++) {
    result = result ^ i ^ array[i];
  }

  return result;
}

module.exports = repeatNumbers;
