const head = function(array) {
  const newArray = array.shift(0);
  return newArray;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Passed:' + (actual === expected));
  } else {
    console.log('🛑🛑🛑 Assertion Failed:' + (actual !== expected));
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");