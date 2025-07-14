// //Introduction of JSON Store data in local Storage
let userName = document.querySelector("#text");
let email = document.querySelector("#email");
// let btn = document.querySelector("#btn");
// let show = document.querySelector("#show");

// let store = localStorage.getItem("storData");

// show.innerHTML = `${store[0]} ${store[1]} `;

// btn.addEventListener("click", () => {
//   let arr = localStorage.getItem("storData") || ["batman", "batman@gmail.com"];

//   localStorage.setItem("storeData", arr);

//   userName.innerHTML = arr[0];
//   email.innerText = arr[1];
// });

localStorage.setItem(
  "storeData",
  JSON.stringify({
    name: "batman",
    email: "batman@gmail.com",
  })
); //(json: javascript object notation)

let store = JSON.parse(localStorage.getItem("storeData"));

userName.innerText = store.name
email.innerText = store.email

console.log(store);
