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

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion failed: ${arr1} !== ${arr2}`);
  }
}

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions('hello'));