const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  const keyArr = Object.keys(obj);
  for (let elem of keyArr) {
    if (obj[elem] === val) return elem;
  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse", undefined)));