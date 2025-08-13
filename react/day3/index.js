// Spreading
// merging
// destructuring
// map and key( unique identity)
// filter and reduce

// array is non primitive type which is mean refrence type

// let array = [1, 2, 3, 4]; // asdfkjll
// let array3 = [15, 5, 43, 45,  2, 34, 1];

// let array2 = [...array , ...array3];

// console.log(array2)
// console.log(array == array2);

let [name, age, power, display] = [
  "batman",
  44,
  "billionare",
  function () {
    console.log("hi  i am batman");
  },
];

console.log(name, age, power);

display();

let { rating, year, movie } = {
  movie: "mahavatar narsimha",
  year: "2025",
  rating: "9.7",
};

console.log(movie, year, rating);

console.log([1, 2, 3] == "1,2,3"); // implicit

let array = [1, 2, 3, 12, 13, 5, 5, 7, 8];
let array2 = [4, 5, 6, 7, 6, 2, 3, 1];
console.log(array.map == array2.map);

let result = array.filter((element, index) => {
  //iterate
  return element > 5;
});

console.log(result);

let resultSum = array2.reduce((acc, element) => {
  acc += element;

  return acc
}, 0);

console.log(resultSum)


console.log([]=="")

// string.split
//  array.join
// .trim
// include


let string = "batman"

let sotre = string.includes("bat")
console.log(sotre)