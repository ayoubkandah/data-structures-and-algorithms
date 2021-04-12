class Node{
    constructor(value){
    this.value=value
    this.next=null
    }
    
    }
    class AnimalShelter{
    constructor(){
      this.front=null
      this.end=null
      this.length=0;
    }
    
    enQueue(val){
    let node=new Node(val)
    
    if(this.length==0){
    this.front=node
    this.end=node;
    this.length++
    }else{
      // node.next=this.end
    this.end.next=node
      this.end=node
      this.length++
    }
    
    }
    deQueue(kind){
      console.log(this.length)
      let temp=this.front
for(let x=0;x<this.length;x++){
if(temp.value.name==kind){

return temp.value.constructor.name
}

temp=temp.next
}return null
    }
    
    
    }

    class Dog{
        constructor(name)
        {
          this.name=name
        }
      }
      class Cat{
        constructor(name){
      this.name=name
      
        }
      }


module.exports={AnimalShelter,Dog,Cat}