/* const assertEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

assertEqual(middle([5,6,7]), 5);
assertEqual(middle(["Hello", "Lighthouse", "Labs"]), "Hello"); */

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const middle = require('../middle');


describe("#middle", () => {
  it("should return [5,6] for [1, 5, 6, 8]", () => {
    assert.deepEqual(middle([1, 5, 6, 8]), [5,6]);
  });
  it("should return [6] for [1, 5, 6, 8, 57]", () => {
    assert.deepEqual(middle([1, 5, 6, 8, 57]), [6]);
  });
});