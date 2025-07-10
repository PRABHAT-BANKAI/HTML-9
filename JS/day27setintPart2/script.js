//SETTIMEOUT Modal show web page load setInterval, clearinterval Automatic slider

function show() {
  let btn = document.querySelector("#modal");
  let text = document.querySelector("#text");
  let card = document.querySelector("#card");

  text.innerText = "hello world ";

  btn.addEventListener("click", () => {
    card.style.display = "block";
  });
}

window.addEventListener("load", show);
