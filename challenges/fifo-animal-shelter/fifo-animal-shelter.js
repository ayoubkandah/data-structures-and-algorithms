class Node{
    constructor(value){
    this.value=value
    this.next=null
    }
    
    }
    class Queue{
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
    deQueue(){
      let result;
      if(this.length>=1){
result=this.front
    this.front=this.front.next
    this.length--
    return result.value
    }else if(this.length==1){
    this.front=null
    this.end=null
    this.length--
    result=null
    return result
    }else{
      return "Exception"
    }
    
    }
    peek(){
    if(this.length>0){
    return this.front.value
    
    }else{
      return "Exception"
    }
    
    }
    
    isEmpty(){
    if(this.length>0){
      return false
    }else{
      return true
    }
    
    }
    
    }

    class AnimalShelter{
    constructor(){
      this.dog=new Queue() ;
      this.cat=new Queue();
    }
    
    enQueue(val){
      // console.log(val.constructor.name)
      if(val.constructor.name=="dog"){
      this.dog.enQueue(val)
    }else if(val.constructor.name=="cat"){
      this.cat.enQueue(val)
    }else{console.log("ee")
  throw new Error}
    
    }

    
    
    deQueue(kind){
      // console.log(this.length)
      if(kind=="dog"){
// console.log(this.dog.deQueue())
return this.dog.deQueue()
      }else if(kind=="cat"){

        return this.cat.deQueue()
      }else{
          return null
      }

    

}

    
    
    }

    class dog{
        constructor(name)
        {
          this.name=name
        }
      }
      class cat{
        constructor(name){
      this.name=name
      
        }
      }

      module.exports={dog,cat,AnimalShelter}