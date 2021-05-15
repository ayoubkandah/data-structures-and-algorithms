
let stack=require("../stack and queue/stack-and-queue")
class PseudoQueue{

    constructor(){
    
      this.stack1=new stack.Stack();
      this.stack2=null;
    }
    
    enQueue(val){
    this.stack1.push(val)
    
    }
    deQueue(){
    
    
          let result;
    
    this.stack2=new stack.Stack()
    let y=this.stack1.top
    // console.log(y)
    for(let x=0;x<this.stack1.length;x++){
    
    this.stack2.push(y.value)
    y=y.next
    }
    result=this.stack2.top.value
    this.stack2.pop()
    this.stack1=new stack.Stack()
    let e=this.stack2.top
    // console.log(y)
    for(let x=0;x<this.stack2.length;x++){
    
    this.stack1.push(e.value)
    e=e.next
    }
    return result
    
    
    }
    
    }
    

    module.exports=PseudoQueue