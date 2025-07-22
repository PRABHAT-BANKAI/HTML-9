console.log(1);
console.log(2);
console.log(3);
console.log(4);

async function show() {
  console.log(4.5);

  let response =  fetch("https://dog.ceo/api/breed/husky/images/random");
  console.log(response)
  console.log(5);
}
show();

console.log(6);
console.log(7);
