import { log } from "console";
import { HexaValues, HexaValuesMapped, divmod, reverseString } from "./utils";


function decimalToHexa(){
  let output="";
  function decimalToHexaOperation(a:number){
 
    const [quotient, remainder]  = divmod(a, 16);
   
    if(quotient<16){
      //@ts-ignore
      output+=HexaValues[remainder]
      //@ts-ignore
      output+=HexaValues[quotient]
      //@ts-ignore
      // output+=HexaValues[remainder]
      return reverseString(output)
    }else{
      //@ts-ignore
      output+=HexaValues[remainder]
      decimalToHexaOperation(quotient)
    }
  
    return reverseString(output)
  }

  return output
}


function hexaToDecimal(a:string){  
  const convertedString = a.split("")
  const reversedArray = convertedString.reverse()

  let result = 0
  
  reversedArray.forEach((hexa,index)=>{
    //@ts-ignore
    const decimalValue = HexaValuesMapped[hexa]
    result += decimalValue*(16**index)

  })

  return result
}

// log(hexaToDecimal("148C"))
// log(decimalToHexa(919231231))