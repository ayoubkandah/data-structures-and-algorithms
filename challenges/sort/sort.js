function SelectionSort(arr){
    let Arr=arr
    let output=[]
    let trigger;
    let j
    let x=0
    for(x;x<Arr.length;x++){
    trigger=false
      
    for( j=0;j<Arr.length;j++){
      // console.log(Arr[x],"||",Arr[j])
      if(Arr[x]<Arr[j]){
      
    trigger=true;
    break;
      }
    }
    if(!trigger){
    output.push(Arr[x])
    Arr[x]=null
    // console.log(Arr)
    x=-1
    }
    
    if(Arr.length==output.length){
      break;
    }
    }
    return output.reverse()
    }
    
    // console.log(SelectionSort([8,4,23,42,16,15]))
    
    // ,23,42,16,15
module.exports=  SelectionSort