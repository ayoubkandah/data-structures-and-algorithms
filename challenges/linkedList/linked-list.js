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

append(value){
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
insertBefore(value, newVal){
  
  let trigger =true
let e=this.head
let mirror=null;
let mirror2;
for(let x=1;x<=this.length;x++){
// console.log(trigger)
if(x<this.length ){
mirror2=e.val
}
// console.log(mirror2)

//    let newNode=new Node(mirror)
// e.next=newNode
// break
// }

if(trigger==false){
// console.log(e)
  if(x<this.length ){


            // console.log(e.next)
      //  console.log(e.next.val)

// console.log("qwa")
  // let newNode=new Node(mirror)
e.val=mirror


mirror=mirror2
e=e.next
 

}
   else{

  let newNode=new Node(mirror)
let nextNode=this.head
// console.log(nextNode.next)
// console.log( headNode.next)
 while(nextNode.next){
  //  nextNode=.next
   nextNode=nextNode.next
 }
 this.length++;
  nextNode.next=newNode


     break
     }
}
if(trigger==true && e.val==value ){
            

   let newNode=new Node(newVal)
mirror= e.val  
   e.val=newNode.val
   trigger=false
   this.length++;


    if(e.next!==null){
 e=e.next
  


 }else if (e.next==null){
      //  console.log("ss")

let newNode=new Node(mirror)
     e.next=newNode 
     break
     }
    
  
}else if (trigger){
  e=e.next
              

  // return false
}


}


}
insertAfter(value, newVal){

let trigger =true
let e=this.head
let mirror=null;
let mirror2;
for(let x=1;x<=this.length;x++){
// console.log(trigger)
if(x<this.length ){
mirror2=e.val
}
// console.log(mirror2)

//    let newNode=new Node(mirror)
// e.next=newNode
// break
// }

if(trigger==false){
// console.log(e)
  if(x<this.length &&e.next ){


            // console.log(e.next)
      //  console.log(e.next.val)

// console.log("qwa")
  // let newNode=new Node(mirror)
  e=e.next
e.val=mirror
console.log(e.val)

mirror=mirror2

 

}
   else{

  let newNode=new Node(mirror)
let nextNode=this.head
// console.log(nextNode.next)
// console.log( headNode.next)
 while(nextNode.next){
  //  nextNode=.next
   nextNode=nextNode.next
 }
 this.length++;
  nextNode.next=newNode
     break
     }
}
if(trigger==true && e.val==value ){

    if(e.next!==null){
   let newNode=new Node(newVal)
mirror= e.next.val
   e.next.val=newNode.val
// e=e.next
   trigger=false
   this.length++;
 e=e.next

 }else if (e.next==null){
      //  console.log("ss")
let newNode=new Node(newVal)
     e.next=newNode 
     break
     }
    
  
}else if (trigger){
  e=e.next
              

  // return false
}


}

}

}

// let LL=new Linked()

module.exports=Linked