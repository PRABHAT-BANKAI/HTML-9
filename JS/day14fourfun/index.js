// global scope

// FUNCTION WITH FOUR WAYS
// normal function
// variable function
// arrow function
// anonymous function

show();

function show() {
  //function or local  scope

  console.log("helloworld");
}

{
}

show();

//sum()// before initialization 

let sum = function (num1, num2) {// anonymous function 
  // parameter

  return num1 + num2;
};

console.log(sum(12, 8)); // argument

// syntax of arrow  function 
let sub = (a,b)=>(a-b)// a=>a-15


// let result = Math.abs(-55)// Math.floor // Math.ceil // Math.random // Math.round // Math.sqrt
// console.log(result)


// console.log(sub(55,12))

// console.log(null <= 0)
// console.log([1,2,3]+[4,5,6])
// console.log({name:"batman"}+{age:12})


