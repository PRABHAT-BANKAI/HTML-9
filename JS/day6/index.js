// Some Logical, Programs procedure programs ,
// swapping Ex : grade , bill , interest , employ salary

// swapping
let a = 10;

let b = 20;

// a = 20
// b = 10

let temp = a;

b = a;

b = temp;

a = a + b; //30
b = a - b; //30-20=10

a = a - b; // 30-10 = 20

let marks = 55;

let total = 500;

let percentage = (marks / total) * 100;

console.log(percentage);

// bodmas

console.log(12 + (2 * 4) / 2 - 22 + (5 + 5)); //12+ 8 /2 -22 +10 // 12 + 4 -22 +10

let number = 0;

let bool = Boolean(number);

console.log(bool); // explicit conversion by user

console.log(5 - true); // implicit  javscript converted data types  by own // to dont throw the error

// concatenation

console.log(6 + 6 + 78 + "4"); // implicit

console.log(4 - "asdf"); //NaN Not A Number

console.log("12" - 6); // convert string number than i will get answer 6

// && ||

console.log(99 > 1 || (55 > 4 && 55 == 33) || (78 > 333 && 0));

//  true || false || false

// prefix postfix
// ++   single increment
// -- single increment

// let value = 2;

// console.log(value++); // postfix// first it assign value then increment 
// //3
// console.log(++value); // prefix  /// first increment the value then assgin the value

// console.log(value);



let num = 1

num++  //2

let result = num++  // result = 2  num 3

let sum = num + result++// 3  + 3

console.log(sum)
