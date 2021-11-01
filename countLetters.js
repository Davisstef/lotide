const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('😈😈😈 Assertion Passed:' + `${actual} === ${expected}`);
  } else {
    console.log('😠😠😠 Assertion Failed:' + `${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let letters = {};
  const result = {};
  str = str.replace(/\s/g, '');
  for (let i = 0; i < str.length; i++) {
    use(str[i]);
  }
  return letters;
  
  function use(key) {
    if (letters[key])
      letters[key]++;
    else
      letters[key] = 1;
  }
};