function multiBracketValidation(input){
    let curlArr=[]
    let paranthArr=[]
    let arr=[]
let arrIndex=[]
let paranthArrIndex=[]
let curlArrIndex=[]
  if(input.length==2){
if(input=="[]"||input=="{}"||input=="()"){
  return true
}else{return false}
  }
  
  if(input.length>2){
    //---else start
let str= input.split("")
for(let x=0;x<str.length;x++){
if(str[x]=="["||str[x]=="]"){

  arr.push(str[x])
  arrIndex.push(str.indexOf(str[x]))
}
if(str[x]=="{"||str[x]=="}"){

  curlArr.push(str[x])
  curlArrIndex.push(str.indexOf(str[x]))
}

if(str[x]=="("||str[x]==")"){

  paranthArr.push(str[x])
  paranthArrIndex.push(str.indexOf(str[x]))
}
}

if(paranthArr.length>0){
  let count=0;
  for(let x=0;x<paranthArr.length;x++){
    if(count<0){
      return false
    }
    if(paranthArr[x]=="("){
      count++;
    }else{
      count--;
    }
  }
  if(!count==0){
    return false
  }
  let strArr=input.split("").slice(paranthArrIndex[0],paranthArrIndex[paranthArrIndex.length-1])
  if(strArr.includes("{")||strArr.includes("}")||strArr.includes("[")||strArr.includes("]")){
    return false
}
}
if(curlArr.length>0){
  let count=0;
  for(let x=0;x<curlArr.length;x++){
    if(count<0){
      return false
    }
    if(curlArr[x]=="{"){
      count++;
    }else{
      count--;
    }
  }
  if(!count==0){
    return false
  }
  
  let strArr=input.split("").slice(curlArrIndex[0],curlArrIndex[curlArrIndex.length-1])
  if(strArr.includes("(")||strArr.includes(")")||strArr.includes("[")||strArr.includes("]")){
    return false
}
}
if(arr.length>0){
  let count=0;
  for(let x=0;x<arr.length;x++){
  
    if(count<0){
      return false
    }
    if(arr[x]=="["){
      count++;

    }else{
      count--;
    }
    
  } 
  if(!count==0){
    return false
  }
  let strArr=input.split("").slice(arrIndex[0],arrIndex[arrIndex.length-1])
  if(strArr.includes("(")||strArr.includes(")")||strArr.includes("{")||strArr.includes("}")){
    return false
  }

  // console.log(arrIndex)
 
}

///---end of else
  }else{
    return false
  }
   return true
}

module.exports=multiBracketValidation