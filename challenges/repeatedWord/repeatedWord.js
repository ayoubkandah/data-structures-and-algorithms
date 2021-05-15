function repeatedWord(val){
  let str = val
  let newStr=[];
  let temp="";
  let output=null;


  for(let x=0;x<str.length;x++){
    console.log(newStr)

    if(str.charAt(x)===" "||str.charAt(x)===","||str.charAt(x)==="."){
      // console.log(newStr)
      if(newStr.includes(temp)){
        console.log(temp,"innnnnnnnnnnnnnn")
        output=temp
        break

      }else{
        if(temp===" "||temp===","||temp==="."||temp===""){
          temp=""
        }else{

          newStr.push(temp)
          temp="";
        }
      }
    }else{
      if(temp===" "||temp===","||temp==="."){
        temp=""
      }else{

        temp=temp+str.charAt(x)
      }
    }
  }
  return output
}
module.exports=repeatedWord
