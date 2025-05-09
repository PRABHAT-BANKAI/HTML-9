// Data Types in javascript

// Primitives
// 1. String
let name = "John Doe"; // '', ``
// 2. Number
let age = 25; // 1, 2.5, -3,0
// 3. Boolean
let isStudent = true; // true, false
// 4. Undefined
let address; // undefined
console.log(address); // undefined
// 5. Null // null can be assigned by user

// 6. BigInt (n)
let number = 1234567928340982309582093538n;
console.log(number);

// non-primitive
// 1. Object // object is a collection of key-value pairs
let obj = {
  userName: "John Doe",
  age: 25,
};
// 2. Array // array is a collection of values and data types

let array = [1, 2, "string", true];
// 3. Function // function is a block of code that can be called and executed



console.log(1)
console.log(2)
console.log(3)
console.log(4)

show3()//function expression or call 
show()
show2()
// function declaration
function show(){
  console.log("1")
}
function show2(){
  console.log("2")
}
function show3(){
  console.log("3")
}




let value = 12
let value2 = "12"

console.log( typeof value)// tells the data type of value
console.log(typeof value2)// tells the data type of value2

let getCondtion = true 
getCondtion  = 22
console.log(typeof getCondtion)// tells the data type of getCondtion

console.log(typeof obj)
console.log(typeof array)

console.log(obj.userName,obj.age)



let firstName = "John"
let lastName = "Doe"

console.log(firstName+"____"+lastName)// string concatenation