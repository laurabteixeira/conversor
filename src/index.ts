import { log } from "console";
import { HexaValues,  divmod, reverseString } from "./utils";
import { decimalConversor } from "./decimalConversor";


function decimalToHexa(a:number){
  let output="";
  function decimalToHexaOperation(a:number){
 
    const [quotient, remainder]  = divmod(a, 16);
   
    if(quotient<16){
      output+=HexaValues[remainder as keyof typeof HexaValues]
      if(quotient>0) output+=HexaValues[quotient as keyof typeof HexaValues]
      return reverseString(output)
    }else{
      output+=HexaValues[remainder as keyof typeof HexaValues]
      decimalToHexaOperation(quotient)
    }
  
    return reverseString(output)
  }

  return decimalToHexaOperation(a)
}


function hexaToDecimal(a:string){
  return decimalConversor(a, 16)
}

function binaryToDecimal(a:string){
  return decimalConversor(a, 2)
}


log(binaryToDecimal("101111"));
log(hexaToDecimal("148C"))
log(decimalToHexa(919231231))