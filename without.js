const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(arr1, arr2) {
  let filteredArray = [];
  for (const element of arr1) {
    if (!arr2.includes(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);