function decimalToBinary(decimal) {
    if (decimal === 0) {
      return '0';
    }
  
    let binary = '';
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
  
    return binary;
  }
 
  let dec_inp=document.getElementById("dec-inp")
  let bin_inp=document.getElementById("bin-inp")
  let convert=document.getElementById("convert")

convert.addEventListener("click",function(){
    bin_inp.value= decimalToBinary(Number(dec_inp.value)) 
})
