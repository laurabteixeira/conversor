import { HexaValuesMapped, divmod, reverseString } from "./utils"

export function decimalConversor(value:string, fromBase:2|16){
  const convertedString = value.split("")
  const reversedArray = convertedString.reverse()

  let result = 0
  
  reversedArray.forEach((hexa,index)=>{
    const decimalValue = HexaValuesMapped[hexa as keyof typeof HexaValuesMapped]
    result += decimalValue*(fromBase**index)

  })

  return result
}

export function decimalToBinary(input:number){
  let output=""
  
  function decimalToBinaryOperation(a:number){
    
    const [quotient, remainder] = divmod(a, 2);

    output += remainder;

    if (quotient >= 1) {
      decimalToBinaryOperation(quotient);
    }

    return reverseString(output);  
  }

  return decimalToBinaryOperation(input)
}
