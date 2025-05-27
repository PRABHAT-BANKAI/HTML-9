// nested functions Closure concepts
//  variables as a function arrow function IIFE

// function inner() {
//   console.log("inner function");
// }

// function outer() {
//   inner();
//   inner();
//   console.log("outer function ");
// }

// outer();

//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

function outer() {
  // closure// in outer function have those variable have access in  inner function because of (lexical environment)
  let a = 5;
  let b = 10;

  function inner() {
    console.log("inner", a + b);
  }
  a = 11;
  b = 88;

  console.log("outer");

  return inner;
}

let infun = outer();

infun();

// let sum = (a, b) => a + b;

// console.log(sum(45, 15))

//IIFE (Immediatly invoke function expression )
// anonymous function have no name
(function () {
  console.log("Hello IIFE");
})();
