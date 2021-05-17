

function tree_intersection(tree1 , tree2){
    let Tree1 = tree1.preOrder();
    let Tree2 = tree2.preOrder();
    let Arr=Tree1.filter(ele => {
      if(Tree2.includes(ele)){
        return ele
      }else{
return false
      }
        });
   return Arr
}
module.exports=tree_intersection
