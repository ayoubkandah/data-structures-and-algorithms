
    const   Linked  =require("../linkedList/linked-list")
    
    class HashTable {
        table = new Array(50);
      
        add(key, value) {
          let hash = this.getHash(key);
          //if contains a key, do nothing
          if (!this.table[hash]) {
            this.table[hash] = new Linked();//LL
        
          }
      
          this.table[hash].insert({ key, value });
        }
      
        getHash(key) {
          let hash = 353;
          for (let i = 0; i < key.length; i++) {
            // console.log(hash);
            hash = hash * 599 * key.charCodeAt(i) % this.table.length;
          }
      
          return hash;
        }
      
        find(key) {
            let hash = this.getHash(key)
            let temp=this.table[hash].head
                    //  console.log(temp.head)
            while(temp!==null){
                    //  console.log("d")
                     
                     
                 if(temp.val.key==key){
                   return temp.val.value
                 }else{
                  temp=temp.next
                  //  temp.val=temp.next.val
                    //  temp.head.val=temp.head.next.val
                    //  console.log(temp)
                  //  break
                 }
    
            }
                      return null
          // return value;
        }
        contains(key) {
          let count =0
          let temp
            let hash = this.getHash(key)
            if(this.table[hash]){
             temp=this.table[hash].head
        } else{return false}
                    //  console.log(temp.head)
            while(temp!==null){
                    //  console.log("d")
                     
                     
                 if(temp.val.key==key){
                   return true
                 }else{
                  temp=temp.next
                  //  temp.val=temp.next.val
                    //  temp.head.val=temp.head.next.val
                    //  console.log(temp)
                  //  break
                 }
    
            }
                      return false
    
          // return Boolean;
        }
      }
      
      module.exports=HashTable
  
  