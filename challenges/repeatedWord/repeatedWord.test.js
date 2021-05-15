let repeatedWord=require("./repeatedWord")

describe("testing repeated word",()=>{

  test("testing 1",()=>{
 let str="It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York"

    expect(repeatedWord(str)).toEqual("summer")





  })
  test("testing 2",()=>{
    let str="Once upon a time, there was a brave princess who..."

    expect(repeatedWord(str)).toEqual("a")


  })


})
