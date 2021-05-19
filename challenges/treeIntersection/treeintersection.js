

function tree_intersection(tree1 , tree2){
    let Tree1 = tree1.preOrder();
    let Tree2 = tree2.preOrder();
  //   let length ;
  // if(Tree1>tree2 || Tree1===Tree2){
  //     length= Tree1
  // }else{
  //     length= Tree2

  // console.log(Tree1)
  let output=[]
  for(let x= 0;x<Tree1.length;x++){
    for(let j=0;j<Tree2.length;j++) {
    if(Tree1[x]===Tree2[j]){
    output.push(Tree1[x])
    }

    }

  }
//     let Arr=Tree1.filter(ele => {
//       if(Tree2.includes(ele)){
//         return ele
//       }else{
// return false
//       }
//         });
//   console.log(output,"eeeeeeeeeeeeeeeeeeeeee")
   return output
}
module.exports=tree_intersection
