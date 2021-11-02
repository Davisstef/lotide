const assertEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[Math.ceil(arr.length / 2) - 1], arr[Math.ceil(arr.length / 2)]];
  } else {
    return [arr[Math.floor(arr.length / 2)]];
  }
};

module.exports = middle; 