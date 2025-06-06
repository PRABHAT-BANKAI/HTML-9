//Array With Functions (map ,filter, foreach, indexof, findindex ,includes, every, some)

// array is a collection of multiple data types in javascript

let array = [1, 2, 3, 4, false, "hello"]; // array index start with zero

let length = array.length;
console.log(length);

console.log(array[5]);

console.log(array[array.length - 1]);

let array2 = [12, 43, 67, 85, 2, 7, 8, 76];

let sum = 0;
for (let i = 0; i < array2.length; i++) {
  sum += array2[i];
}

console.log(sum);

let string = "";

for (let i = array2.length - 1; i >= 0; i--) {
  string += array2[i] + " ";
}

console.log(string);

// even numbers or odd number dono find krne 50 sae 100
let sum2 = 0;

for (let i = 50; i <= 100; i++) {
  sum2 += i;
}
console.log(sum2);

let i = 1;
{
  let i = 2;
}

for (let i = 1; i <= 5; i++) {
  let string = "";
  for (let j = 1; j <= 5; j++) {
    string += j;
  }
  console.log(string)
}
