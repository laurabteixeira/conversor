import { log } from "console";
import { HexaValues,  HexaValuesMapped,  divmod, makesVariableLengthDivisibleByFour, reverseString } from "./utils";
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

function binaryToHexa(input:string){
  let output=""

  input =  makesVariableLengthDivisibleByFour(input)
  const nibbles = input.match(/.{1,4}/g) || []

  nibbles.forEach((nibble)=>{
    const nibbleInDecimal = binaryToDecimal(nibble)
    output+=decimalToHexa(nibbleInDecimal)    
  })

  return output
}

log(binaryToHexa("11111"))

// DECIMAL PARA BINÁRIO

// HEXADECIMAL PARA BINÁRIO

// BCD PARA DECIMAL

// DECIMAL PARA BCD


//log(binaryToDecimal("101111"));
//log(hexaToDecimal("148C"))
//log(decimalToHexa(919231231))