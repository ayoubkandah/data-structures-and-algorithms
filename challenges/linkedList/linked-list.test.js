'use strict'
const Linked = require("./linked-list")
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

test("Append",()=>{
    LL.append(80)
    // console.log(LL.head,"--------")
expect(LL.head.next.next.next.val).toEqual(80)
})


test("Before middle",()=>{
    // LL.append(80)
    LL.insertBefore(nextTest2,55)
    // console.log(LL.head,"--------")
expect(LL.head.next.next.val).toEqual(55)
})
test("Before first",()=>{
    let LL2=new Linked()
    // LL.append(80)
    let testNum=10
    let nextTest=12
    LL2.insert(testNum)
    LL2.insert(nextTest)
    LL2.insertBefore(testNum,1)
    // console.log(LL.head,"--------")
expect(LL2.head.val).toEqual(1)
})
test("After middle",()=>{
    let LL3=new Linked()
    // LL.append(80)
    let testNum=10
    let nextTest=12
    LL3.insert(testNum)
    LL3.insert(nextTest)
    LL3.insert(14)
    LL3.insertAfter(nextTest,6)
    // console.log(LL.head,"--------")
expect(LL3.head.next.next.val).toEqual(6)

})
test("After last",()=>{
    let LL3=new Linked()
    // LL.append(80)
    let testNum=10
    let nextTest=12
    LL3.insert(testNum)
    LL3.insert(nextTest)
    LL3.insert(14)
    LL3.insertAfter(14,6)
    // console.log(LL.head,"--------")
expect(LL3.head.next.next.next.val).toEqual(6)

})
})