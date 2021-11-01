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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[Math.ceil(arr.length / 2) - 1], arr[Math.ceil(arr.length / 2)]];
  } else {
    return [arr[Math.floor(arr.length / 2)]];
  }
};
