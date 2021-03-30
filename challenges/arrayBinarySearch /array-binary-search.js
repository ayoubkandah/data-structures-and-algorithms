function BinarySearch(arr, num){
    let count=0
    let middle;
    let temp;
    let end=arr.length-1
    if(arr.length%2==0){
    middle=arr.length/2
    }else{
     middle=Math.floor(arr.length/2)+1
    
    }
    // console.log(middle)
    while(count<=arr.length){
    count++;
    // console.log(middle)
    if(arr[middle]==num){
      return middle
    }else if(num>arr[middle]){
    if(((end+middle)/2)%2==0){
    temp=(end+middle)/2
    middle=temp
    }else{
     temp=Math.floor(((end+middle)/2))+1
    middle=temp
    }
    if(arr[temp]==num){
      // console.log(temp)
    
      return temp
    }
    //-------
    } else if(num<arr[middle]){
    if(((middle)/2)%2==0){
    temp=(middle)/2
    middle=temp
    }else{
     temp=Math.floor(((middle)/2))
    middle=temp
    }
    if(arr[temp]==num){
      // console.log(temp)
    
      return temp
    }
    }
    }
    
    return -1
    
    }
    
    
module.exports=BinarySearch;