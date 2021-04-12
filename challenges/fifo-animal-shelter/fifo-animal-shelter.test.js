let {AnimalShelter, cat,dog}=require("./fifo-animal-shelter")


describe("testing",()=>{
    // console.log(LL.head,"0------------------------")
    test("enqueue animal dog and cat object",()=>{
        let Animal=new AnimalShelter()
        let d=new dog()
        // console.log(d,"eeeeeeeeeeeeee")
        let d1=new dog()
        let cat1=new cat()
        let cat2=new cat()
        cat1.name="bella"
        cat2.name="lucy"
        d.name="rot"
        d1.name="husky"
        Animal.enQueue(cat1)
        Animal.enQueue(cat2)
        Animal.enQueue(d)
        Animal.enQueue(d1)
          
        expect(Animal.cat.length).toEqual(2)
        expect(Animal.dog.length).toEqual(2)
// console.log(d1.name,"eeeeeeeeeeeeeeeeeee")
        expect(Animal.dog.end.value.name).toEqual(d1.name)
expect(Animal.cat.end.value.name).toEqual(cat2.name)

})
test("dequeue animal dog and cat object",()=>{
    let Animal=new AnimalShelter()
    let d=new dog()
    let d1=new dog()
    let cat1=new cat()
    let cat2=new cat()
    cat1.name="bella"
    cat2.name="lucy"
    d.name="rot"
    d1.name="husky"
    Animal.enQueue(cat1)
    Animal.enQueue(cat2)
    Animal.enQueue(d)
    Animal.enQueue(d1)
expect(Animal.deQueue("cat")).toEqual(cat1)
expect(Animal.deQueue("dog")).toEqual(d)
expect(Animal.deQueue("cat")).toEqual(cat2)
expect(Animal.deQueue("dog")).toEqual(d1)
expect(Animal.deQueue("E")).toEqual(null)
})
})