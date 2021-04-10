class Node{
    constructor(value){
    this.value=value
    this.next=null
    }
    
    }
    
    
    class Stack {
      constructor() {
        this.top = null;
    this.length=0;
      }
      push(val) {
        let node=new Node(val)
    
        if(this.length==0){
    this.top=node
    this.length++
    }else{
      this.length++
    
      node.next=this.top
      this.top=node
    }
      }
      pop() {
        if(this.length>0){
        this.length--;
        this.top= this.top.next
     }else{
       
       return "Exception"
     }
      }
    peek(){
      if(this.length>0){
    return this.top.value
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
      if(this.length>1){
    this.front=this.front.next
    this.length--
    
    }else if(this.length==1){
    this.front=null
    this.end=null
    this.length--
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


    module.exports={
        Stack:Stack,
        Queue:Queue
    }