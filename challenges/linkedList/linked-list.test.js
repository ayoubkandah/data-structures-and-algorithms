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
expect(LL.toString()).toEqual(`{${testNum}}-->{${nextTest}}-->{${nextTest2}}-->${null}`)
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
test("kth From End if k large than the length",()=>{
    let LL4=new Linked()
    // LL.append(80)
    let head=10
    let next1=12
    let next2=14
    let next3=16
    let next4=17
    let next5=17

    LL4.insert(head)
    LL4.insert(next1)
    LL4.insert(next2)
    LL4.insert(next3)
    LL4.insert(next4)
    LL4.insert(next5)

    let e=LL4.kthFromEnd(7)
    // console.log(e,"-------------")
    expect(e).toEqual("Exception")

})
test("kth From End if k large than the length",()=>{
    let LL4=new Linked()
    // LL.append(80)
    let head=10
    let next1=12
    let next2=14
    let next3=16
    let next4=17
    let next5=18

    LL4.insert(head)
    LL4.insert(next1)
    LL4.insert(next2)
    LL4.insert(next3)
    LL4.insert(next4)
    LL4.insert(next5)

    let e=LL4.kthFromEnd(5)
    // console.log(e,"-------------")
    expect(e).toEqual(head)

})
test("kth From End if k equall the length",()=>{
    let LL4=new Linked()
    // LL.append(80)
    let head=10
    let next1=12
    let next2=14
    let next3=16
    let next4=17
    let next5=18

    LL4.insert(head)
    LL4.insert(next1)
    LL4.insert(next2)
    LL4.insert(next3)
    LL4.insert(next4)
    LL4.insert(next5)

    let e=LL4.kthFromEnd(-3)
    // console.log(e,"-------------")
    expect(e).toEqual("Exception")

})

test("kth From End if k in the middle of the length",()=>{
    let LL4=new Linked()
    // LL.append(80)
    let head=10
    
    LL4.insert(head)
    
    let e=LL4.kthFromEnd(0)
    // console.log(e,"-------------")
    expect(e).toEqual(head)

})

test("kth From End if k in the middle of  the length",()=>{
    let LL4=new Linked()
    // LL.append(80)
    let head=10
    let next1=12
    let next2=14
    let next3=16
    let next4=17
    let next5=18

    LL4.insert(head)
    LL4.insert(next1)
    LL4.insert(next2)
    LL4.insert(next3)
    LL4.insert(next4)
    LL4.insert(next5)

    let e=LL4.kthFromEnd(2)
    // console.log(e,"-------------")
    expect(e).toEqual(next3)

})

test("kth From End if k in the middle of  the length",async ()=>{
    let LL5=new Linked()
    let LL6=new Linked()
    // LL.append(80)
    let head=10
    let next1=12
    let next2=14
    LL5.insert(head)
    LL5.insert(next1)
    LL5.insert(next2)
    LL6.insert(head+10)
    LL6.insert(next1+10)
    // let e=LL5.kthFromEnd(2)
    // let e2=LL5.kthFromEnd(2)
let e= await LL5.zipLists(LL5,LL6)
console.log(e,"0----------------")
    // console.log(e,"-------------")
    expect(e.toString()).toEqual( "{10}-->{20}-->{12}-->{22}-->{14}-->null")
    
    expect(e.length).toEqual( 5)

})
})