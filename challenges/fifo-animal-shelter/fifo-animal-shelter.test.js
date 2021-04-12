let {AnimalShelter}=require("./fifo-animal-shelter")
let {Dog}=require("./fifo-animal-shelter")
let {Cat}=require("./fifo-animal-shelter")

describe("testing",()=>{
    // console.log(LL.head,"0------------------------")
    test("enqueue animal dog and cat object",()=>{
        let Animal=new AnimalShelter()
        let d=new Dog()
        let d1=new Dog()
        let cat=new Cat()
        let cat1=new Cat()
        cat.name="bella"
        cat1.name="lucy"
        d.name="rot"
        d1.name="husky"
        Animal.enQueue(cat)
        Animal.enQueue(cat1)
        Animal.enQueue(d)
        Animal.enQueue(d1)
          
        expect(Animal.length).toEqual(4)
        expect(Animal.end.value.name).toEqual(d1.name)
expect(Animal.front.value.name).toEqual(cat.name)

})
test("enqueue animal dog and cat object",()=>{
    let Animal=new AnimalShelter()
    let d=new Dog()
    let d1=new Dog()
    let cat=new Cat()
    let cat1=new Cat()
    cat.name="bella"
    cat1.name="lucy"
    d.name="rot"
    d1.name="husky"
    Animal.enQueue(cat)
    Animal.enQueue(cat1)
    Animal.enQueue(d)
    Animal.enQueue(d1)
expect(Animal.deQueue("bella")).toEqual("Cat")
expect(Animal.deQueue("xyz")).toEqual(null)
expect(Animal.deQueue("husky")).toEqual("Dog")
})
})