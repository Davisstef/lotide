/* const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello"); */

const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(tail(['5']), '5'); 
});