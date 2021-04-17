class node{
    constructor(value){
      this.value=value
     this.left=null
     this.right=null
    }
  }
  
  class BinarySearch{
  constructor(root){
    this.root=root
  }
  add(val) {
          const newN = new node(val);
          if (!this.root) {
              this.root = newN;
          } else {
              function checking  (node)  {
                  if (val > node.value) {
                      if (node.right) {
                          checking(node.right)
                      }else{
                          node.right = newN;
                      }
                  } else if (val < node.value) {
                      if (node.left) {
                          checking(node.left)
                      }else{
                          node.left = newN;
                      }
                  }
              }
              checking(this.root);
          }
      }
  
  contains(val){
      let root = this.root;
          while (root) {
            if (val < root.value){
  root = root.left;
            } 
            else if (val > root.value){
              root = root.right;
            }else{ return true};
          }
          return false;
  }
  }
  class Tree{
    constructor(root){
      this.root=root
    }
  
  preOrder(){
    let arr=[]
    saving(this.root)
    function saving(node){
      if(node){
        arr.push(node.value)
      }
      if(node.left){
  saving(node.left)
      }if(node.right){
        saving(node.right)
      }
    }
    return arr
  }
  inOrder(){
    let arr=[]
    saving(this.root)
    function saving(node){
      
      if(node.left){
  saving(node.left)
      }
      if(node){
        arr.push(node.value)
      }
      if(node.right){
        saving(node.right)
      }
    }
    return arr
  }
  
  postOrder(){
    let arr=[]
    saving(this.root)
    function saving(node){
      if(node.left){
  saving(node.left)
      }
      if(node.right){
        saving(node.right)
      }
      if(node){
        arr.push(node.value)
      
      }
  
    }
        return arr
  }
  
  }
  
//   let a=new node(10)
//   let b=new node(7)
//   let c=new node(13)
//   let d=new node(5)
//   let e=new node(9)
  
//   a.left=b
//   a.right=c
//   b.left=d
//   b.right=e
//   let tr=new BinarySearch(a)
  
//   tr.add(6)
//   console.log(tr.contains(14))
  module.exports={BinarySearch:BinarySearch,Tree:Tree,node:node}
  
  // Pre-order: root >> left >> right
  // In-order: left >> root >> right
  // Post-order: left >> right >> root