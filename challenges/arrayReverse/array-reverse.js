
"use strict"
// const superTest = require("supertest")
// const fun=superTest(reverseArray)

function reverseArray(Arr){
    let Result=[]
  for(let i=1;i<=Arr.length;i++){
  Result.push(Arr[Arr.length-i])
  }
return Result;
  }
  
  
  reverseArray(arr)

//   describe('Testing challenge 1', () => {
//     test('It should return an array with 1 added to each value of the original array', () => {
//       expect(reverseArray([1, 2, 3, 4, 5, 6])).toStrictEqual([ 6, 5, 4, 3, 2, 1 ]);
//     });
//   });