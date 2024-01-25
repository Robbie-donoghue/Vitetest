export function isPalindrome(str) {
    // r#make a string to compare to the input string 
// `hello`.replace(`l` , ``) 
//  `hello`.split(``) // splits string into an array of chars
 let betterString = str.replace(/[\W]/g, ``).toLowerCase()
 let reversedString = betterString.split(``).reverse().join(``)
  // implement function
  console.log(reversedString)
  return betterString === reversedString
}

export function sum(a, b) {
    return (a + b);
}
export function subtract(a, b) {
    //implement function
    return(a-b);
}

export function multiply(a, b) {
    //implement function
    return(a*b)
}
export function divide(a, b) {
    //implement function
    return (a/b)
}