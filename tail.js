const assertEqual = require('./assertEqual');

const tail = function(array) {
  const newArray = array.slice(1);
  return newArray;
};

module.exports = tail;