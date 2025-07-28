console.log(1);
console.log(2);
console.log(3);
console.log(4);

setTimeout(() => {
  console.log(5);
}, 2000);

let promise = new Promise((resolve, reject) => {
  let number = 12;

  if (number % 2 == 0) {
    resolve("6");
  } else {
    reject("odd numbers");
  }
});

promise.then((res) => {
  console.log(res);
});
