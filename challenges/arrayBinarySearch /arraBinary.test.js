"use strict"
const arrayBinary = require('./array-binary-search')
describe('Testing binarySearch', () => { 
    test('binarySearch result', () => {
 expect(arrayBinary([4,8,15,16,23,42], 8)).toEqual(1); 
 expect(arrayBinary([11,22,33,44,55,66,77], 90)).toEqual(-1);
 expect(arrayBinary([11,22,33,44,55,66,77], 55)).toEqual(4);
 expect(arrayBinary([11,22,33,44,55,66,77], 77)).toEqual(6); 
 expect(arrayBinary( [1, 2, 3, 5, 6, 7], 1)).toEqual(0);  
});
});