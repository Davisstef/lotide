const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(obj1, obj2) {
  let output = true;
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length) output = false;
  else for (let key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      output = (eqArrays(obj1[key], obj2[key]));
    } else if (typeof(obj1[key]) === "object" || typeof(obj2[key]) === "object") {
      output = eqObjects(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) output = false;
  }
  return output;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false