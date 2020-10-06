String.prototype.toJadenCase = function () {
  let newStr = ""; 

  for(let i=0; i<this.length; i++){
   
     if(/[a-z]/.test(this[i])&&i===0){  
      let char=this[0].toUpperCase();
      newStr+=char; 
     }else if(this[i]===" "){ 
       newStr+=" ";
       newStr+=this[i+1].toUpperCase();
       i+=1;
      }else{
      newStr+=this[i]; 
     }
  }

  return newStr; 
}
