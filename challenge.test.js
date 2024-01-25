// implement the functions to pass as many of the tests in js-challenges.test.js as you can
import{test, expect} from "vitest";
import { isPalindrome, sum  , subtract , multiply , divide } from "./challenge";

test("add function adds two numbers" , () => 
{
    const result = sum(1, 2);
    const expected = 3
    expect(result).toBe(expected)
})


test("subtract function subtracts two numbers" , () => 
{
    const result = subtract(4, 2 )
    const expected = 2
    expect(result).toBe(expected)
})


test("multiply function multiplies two numbers" , () => 
{
    const result = multiply(3,6)
    const expected = 18
    expect(result).toBe(expected)
})


test("divide function divides two numbers" , () =>
{
    const result = divide(6,3)
    const expected = 2
    expect(result).toBe(expected)
})

test(`Palindrome checks if work is Palindrome` , () => 
{
    const result = isPalindrome(`RaceCar`)
    const expected = true
    expect(result).toBe(expected)
})
isPalindrome(`raceCar`)



export function isAnagram() {
  // implement function
}

export function countLetters() {
  // implement function
}