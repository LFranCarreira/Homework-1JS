'use strict';

function BinarioADecimal(num)  {
   let decimal=0;
   for(let i=0;i<num.length;i++){
      decimal+= num[i] * 2 ** (num.length-i-1)
   }return decimal
}console.log(BinarioADecimal(1010))


 function DecimalABinario(num) {
   let binario="";
   while(num>0){
      binario =num%2+binario;
      num=Math.floor(num/2)
   }
   return binario;
}


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
console.log(4 + 5 + "px")