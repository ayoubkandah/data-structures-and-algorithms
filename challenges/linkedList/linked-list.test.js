'use strict'
const linked=require("./linked-list")

describe("testing",()=>{
    let LL=new linked()
    let testNum=10
    let nextTest=12
    let nextTest2=15

    // console.log(LL.head,"0------------------------")
    test("if the linkedlist empty",()=>{
expect(LL.head).toEqual(null)

    })
test("head",()=>{
    LL.insert(testNum)

expect(LL.head.val).toEqual(testNum)
expect(LL.head.next).toEqual(null)
})
test("next",()=>{
    LL.insert(nextTest)
expect(LL.head.next.val).toEqual(nextTest)
})
test("multible next",()=>{
    LL.insert(nextTest2)

    expect(LL.head.next.next.val).toEqual(nextTest2)

})
test("includes",()=>{
expect(LL.includes(nextTest)).toEqual(true)
expect(LL.includes(99)).toEqual(false)
})
test("toString",()=>{
expect(LL.toString()).toEqual(`{${nextTest}}-->{${nextTest2}}-->${null}`)
})
})