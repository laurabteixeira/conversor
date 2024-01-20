import { HexaValuesMapped } from "./utils"

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