# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @davisstef/lotide`

**Require it:**

`const _ = require('@davisstef/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertEqual: Asserts if two values are equal.
* assertArraysEqual: Asserts if two arrays are equal.
* assertObjectsEqual: Asserts if two objects are equal.
* countLetters: Returns the counts of each letter of a string.
* countOnly: Takes items and returns the counts for a specific set of the items.
* eqArrays: Compares two arrays.
* eqObjects: Compares two objects.
* findKey: Scans an object and returns the first key and then the callback returns a truthy value.
* findKeyByValue: Searches for a key on an object where its value matches a given value.
* head: Gets the first element of the array.
* index: Lists all the functions in an object.
* letterPositions: Returns all the indices in the string where each character is found.
* map: Creates a new array with the results of calling a provided function on every element in the array.
* middle: Returns the middle element of an array.
* tail: Returns every element except the first element of the array.
* takeUntil: Slices an array and returns elements taken from the beginning.
* without: Removes elements from an array and returns the new array.