function eqObjects(obj1, obj2) {
  let output = true;
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length)
    output = false;
  else
    for (let key in obj1) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        output = (eqArrays(obj1[key], obj2[key]));
      } else if (typeof (obj1[key]) === "object" || typeof (obj2[key]) === "object") {
        output = eqObjects(obj1[key], obj2[key]);
      } else if (obj1[key] !== obj2[key])
        output = false;
    }
  return output;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) return (console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
};
