export const divmod = (x:number, y:number) => [Math.floor(x / y), x % y];

export function reverseString(str:string) {
  return str.split("").reverse().join("");
}

export function makesVariableLengthDivisibleByFour(input:string){
  const [_, remainder] =divmod(input.length,4);
  if(remainder!==0){
    input = "0"+input
    return makesVariableLengthDivisibleByFour(input)
  }else{
    return input
  }
}

export const HexaValuesMapped = {
  "0":0,
  "1":1,
  "2":2,
  "3":3,
  "4":4,
  "5":5,
  "6":6,
  "7":7,
  "8":8,
  "9":9,
  "A":10,
  "B":11,
  "C":12,
  "D":13,
  "E":14,
  "F":15
}

export const HexaValues = {
  0:"0",
  1:"1",
  2:"2",
  3:"3",
  4:"4",
  5:"5",
  6:"6",
  7:"7",
  8:"8",
  9:"9",
  10:"A",
  11:"B",
  12:"C",
  13:"D",
  14:"E",
  15:"F"
}
