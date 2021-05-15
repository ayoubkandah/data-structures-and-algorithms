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
if(e.val===value){
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
for(let x=1;x<=this.length;x++){

result+=`{${e.val}}${arr}`
e=e.next

if(x===this.length){
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

if(trigger===false){
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

kthFromEnd(k){
  if(k>this.length || k<0){
    return "Exception"
  }else{
let trigger=false;
let calc=this.length-k-1
// console.log(calc)
    let e=this.head
for(let x=0;x<this.length;x++){
if(x==calc){
return e.val
}else{
  e=e.next
  // return false
}
}
}
}
zipLists(list1,list2){
  let L1=list1.head
  let L2=list2.head
  let result=new Linked()
  let loopT
if(list1.length>list2.length){
  loopT=list1.length
  // console.log(loopT)
}else{

  loopT=list2.length
      // console.log(loopT)

}
// console.log(L1.val)
for(let x=0;x<loopT;x++){
if(L1){
  result.insert(L1.val)
  L1=L1.next
}
if(L2){
  result.insert(L2.val)
  L2=L2.next
}

}
//  console.log(result.toString())
  return result
}

reverse(list){
  let c=list.head
  let newList=new Linked()
  newList.insert(c.val)
  let newValue=c.val;
  let p=list.head.val
  let temp=c.val
  while(c.next){
    c=c.next
  newValue=c.val
        newList.insertBefore(temp,newValue)
  temp=c.val
  }

  console.log(newList.toString())
  return newList
  }
}



module.exports=Linked
