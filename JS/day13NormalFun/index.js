// non primitive
// function  // is a block of code

// console.log(1); // inbuild function
// console.log(2);
// console.log(3);
// print1(); // call the function with using parentesis ()
// console.log(4);
// print2();
// console.log(5);

// function print1() {
//   console.log("hello");
// }

// function print2() {
//   console.log("javascript");
// }

// sum();
// function sum() {
//   console.log(5 + 5);
// }

/// normal functions are those function which is intialize with function keyword

function show() {
  console.log("batman");
}

show();
show();
function adding(num2, num1) {
  // function bydefault return undefined
  // parameters // also i can give name

  // console.log("num1", num1);//6
  // console.log("num2", num2);//12

  //  num1+num2

  return num1 + num2;
}

console.log(adding(12, 6)); // arguments

let result = adding(2, 2);
console.log(result);

console.log(adding(5, 6));

let a = 12;

let b = 15;

console.log(sub(a, b));//12,15

let ans = sub(7,2)
console.log(ans)

function sub(b, a) {//12,15
  return a - b;
}



// adding
// subtracting
// multipcation
// dividing
// modulus
// even number
// odd number