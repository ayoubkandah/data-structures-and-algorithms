const quickSort=require("./quicksort.js")

describe("test quick sorting ",()=>{

test("function test",()=>{
let expected=[ 4, 8, 15, 16, 23, 42 ]
let input=[8,4,23,42,16,15]
    expect(quickSort(input)).toEqual(expected)

})
test("function test 2",()=>{
    let expected=[ 2, 2, 3, 19, 40 ,50]
    let input=[2,3,19,50,2,40]
        expect(quickSort(input)).toEqual(expected)
    
    })
    

})