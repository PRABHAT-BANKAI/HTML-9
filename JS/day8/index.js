// Nested if else Statement min, ,max

let email = "asd@gmail.com";

let password = "1234567";

//nested if else

if (email === "sd@gmail.com") {
  if (password === "234567") {
    console.log("login successful");
  } else {
    console.log("invalid password");
  }
} else {
  console.log("invalid email id");
}

let a = 30;
let b = 30;
let c = 30;

if (a == b && b == c && c == a) {
  console.log("all are equal");
}

if (a > b) {
  if (a > c) {
    console.log("a is maximum");
  } else {
    console.log("c is maximum");
  }
} else {
  if (b > c) {
    console.log("b is maximum");
  } else {
    console.log("c is maximum");
  }
}

let max = -Infinity;

let number = 55;

if (max < number) {
  max = number;
}

console.log(max);

let smaller = Infinity;

let number2 = 12;

if (number2 < smaller) {
  smaller = number2;
}

console.log(smaller);

// array is a collection of multiple data
let arr = [1, 2, "12", true, "asd"]; //index

console.log(arr[2]);

if (email == "asd@gmail.com" && password == "1234567") {
  console.log("login succesful");
} else {
  console.log("email and password is invalid");
}

