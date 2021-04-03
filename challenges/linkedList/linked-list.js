'use strict'
let headNode;
class Node {
constructor(val){
this.val=val
this.next=null;
}
}

class Linked {
constructor (){
this.head =null;
this.tail=null;
this.length=0;
}
insert(value){
if(this.head==null){
       headNode=new Node(value)    

this.head=headNode
this.length++;
}else{
    let newNode=new Node(value)
let nextNode=this.head
// console.log(nextNode.next)
// console.log( headNode.next)
 while(nextNode.next){
  //  nextNode=.next
   nextNode=nextNode.next
  
 }
 this.length++;

  nextNode.next=newNode

headNode=newNode
}
}
includes(value){
  let trigger=false;
    let e=this.head
for(let x=0;x<this.length;x++){
if(e.val==value){
  trigger= true
}else{
  e=e.next
  // return false
}
}
return trigger
}

toString(){
  
  let arr="-->"
  let result="";
  let e=this.head
for(let x=0;x<this.length;x++){
if(e.next){
result+=`{${e.next.val}}${arr}`
e=e.next
}else{
  result+=null
}
}
return result
}
}


module.exports=Linked