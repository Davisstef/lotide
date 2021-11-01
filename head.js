const assertEqual = require('./assertEqual');

const head = function(array) {
  const newArray = array.shift(0);
  return newArray;
};

module.exports = head;