// block scope // function scope // global scope
// let const var

//let // const

// let x = 10; // block scope // let key on global scope
// x = 20;
// {
//   console.log(x); // 10
// }

// const y = 30; // block scope // constant

// y = 12; // This will throw an error because y is a constant and cannot be reassigned
// console.log(y);

// var // function scope // global scope
// var z = 40;
// var z = 50; // This is allowed, var can be redeclared same variable name
// console.log(z); // 50

{

  var j = 60;
}
console.log(j);

function test() {
// var j = undefeined
console.log(j)
  var j = 12// function scope // this j is different from the global j
  console.log(j);
}

test();

console.log(j)
