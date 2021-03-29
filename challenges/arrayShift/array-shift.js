'use strict'
function insertShiftArray (arr,num){
  let Aee=arr
if(arr.length%2==0){

Aee.splice(arr.length/2, 0, num);
return Aee
}else{

Aee.splice((Math.floor(arr.length/2)+1), 0, num);
return Aee

}
}


function Test(){
    let Arer=[2,4,6,8]
   let x= insertShiftArray(Arer,5)
  //  let x=[2,4,5,6,8,4]
   let result=[2,4,5,6,8]
   let trigger=true
 

for(let e=0;e<result.length;e++){
  
  if(result[e]==x[e]&&result.length==x.length){
    trigger=true
  }else{
    trigger=false
    break;
  }

}
  console.log(trigger)
    if(trigger){
     return true
     
    }else{
      throw new Error("not match")
    }

}

console.log(Test())