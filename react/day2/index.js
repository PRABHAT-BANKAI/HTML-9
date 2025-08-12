// // Array and Object Intro
// // Available methods

// //what is array
// // where we can store multiple data types [ 1, "string ", boolean  , true, ]

// //object is a key value pair

// // let array = [12,3,5,6,7,8,3]

// // let userData = {
// //   userName : "batman",
// //   age:33,
// //   organisation :"gotham city "
// // }

// // // object  bracket notation // dot notation

// // console.log(userData["userName"])

// // let array =  ["one","two","three","four"]

// // let object = {
// //   one:1,
// //   two:2,
// //   three:3
// // }

// // ouput
// // 1
// // 2
// // 3

// // for(let i=0;i<array.length;i++){
// //   console.log(  object[array[i]])
// // }

// let array = ["one", "two", "three", "four"];
// // create new array
// // update with changes
// // return new array

// let store = array.map((elments, index) => {
//   return elments + index + 1;
// });

// console.log(store);

// console.log("121" - true); // implicit and explicit

let object = {
  userName: "batman",
  age: 33,
  organisation: "gotham city ",
  money:12000
};

// let array2 = Object.values(object)

// console.log(array2)

function show({ userName, organisation, age , money = 500 }) {
  console.log(userName);
  console.log(organisation);
  console.log(age);
  console.log(money)
}

show(object);

let [a, b, c, d] = ["one", "two", "three", "four"]; // destructre
console.log(a, b, c, d);

let { userName, organisation, age, money } = object;
console.log(userName, organisation, age, money);
