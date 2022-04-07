let numContainer = document.getElementById("cartNumber");
let value = 0;
let btnInc = document.querySelector("#buttonCart");
btnInc.addEventListener("click", () => {
  value++;
  numContainer.textContent = value;
});