// Arithmetic operators + - * /  the exponentiation operator**   % modulus return remainder
// Assignment operators
// Comparison operators
// Logical operators
// conversion with console.log and innerHTML

let result = 55 % 7;

console.log(result);

// Assignment operators
// =
// +=
// *=
// -=
// /=
// %=
// **=

let sum = 5;

// sum  = sum + 6

sum += 6;

console.log(sum);

let subract = 12;

subract -= 6;

console.log(subract);

// Comparison operators
// ==   value check
// === strickly check  with data types
// !=  not equal to
// !== strickly not equal to
// <   less than
// > greater than
// >= greater than equal to
// <=less than equal to

console.log(12 === 12); // it will return true and false

console.log("12a" == 12);

console.log(13 != 12); //

// !==
console.log("12" !== 12);

console.log(4 > 2); //true
console.log(3 < 7); // true

console.log(4 >= 4); //true

console.log(3 <= 9); // true


// Logical operators
//!  not
// &&  and  return false
// ||   or   return true


console.log(3<7 && 45>3 && "12"=== 12 && false  && "12"==12)//left to right

console.log(3>7 || 45<3 || "12"=== 12 || false  || "12"===12) // in next we will go in dept also 


console.log(!false)


// conversion   implicit and explicit


// conversion  with explicit   user can convert data type into diff data type 
let number = "1234"
console.log(typeof number)

number = Number(number)
console.log( typeof  number)

number = Boolean(number)//  0 = convert in false  ,   all negative and postive number are convert in true 

console.log(number)
// Number()
// Boolean()
// String()


