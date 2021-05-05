let insertionSort = (Arr) => {

  for (let i = 1; i < Arr.length; i++) {
      let temp = Arr[i];
      let j = i - 1;
      while (Arr[j] > temp) {
        // console.log(j)
        // console.log( Arr)
          Arr[j + 1] = Arr[j];
        // console.log( Arr)
          j = j - 1;
          
      }
      // console.log(j)
      Arr[j + 1] = temp;
        // console.log( Arr)
  }
  // console.log(Arr)
  return Arr;

};




    
    // console.log(SelectionSort([8,4,23,42,16,15]))
    
    // ,23,42,16,15
module.exports=  insertionSort