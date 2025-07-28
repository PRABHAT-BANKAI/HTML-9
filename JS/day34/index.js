//Promises Promises with Async, Await

// Promises
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// promises return three statement
//1 . fullfilled
// 2. pending
//3 . rejected

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

let promise = new Promise((resolve, reject) => {
  let number = 12;

  if (number % 2 == 0) {
    setTimeout(() => {
      resolve("even number");
    }, 2000);
  } else {
    reject("odd numbers");
  }
});

promise
  .then((res) => {
    console.log(res, "then");
  })
  .catch((error) => {
    console.log(error, "err");
  });

  //ES8
async function show() {
  try {
    let response =  promise;
    console.log(response);
  } catch (err) {
    console.log(err, "err");
  }
}
