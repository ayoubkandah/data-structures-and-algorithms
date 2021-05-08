const HashTable=require("./hashtable")
let hashtable

describe("hash table test",()=>{

beforeAll(()=>{

    hashtable=new HashTable()
    hashtable.add("ayoub",10)
    hashtable.add("buoya",20)
})

it(("find"),()=>{
   

    expect(hashtable.find("ayoub")).toBe(10)
    expect(hashtable.find("buoya")).toBe(20)

})
it(("contains"),()=>{
   

    expect(hashtable.contains("ayoub")).toBe(true)
    expect(hashtable.contains("buoya")).toBe(true)
    expect(hashtable.contains("buoaaya")).toBe(false)
   
   })

})