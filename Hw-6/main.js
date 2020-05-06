const minusButton = document.querySelector(".minusButton");
const plusButton = document.querySelector(".plusButton");
const counterNumber = document.querySelector(".counterNumber");

minusButton.addEventListener("click", function () {
  if (counterNumber.innerText > 1) {
    counterNumber.innerText -= 1;
  }
});

plusButton.addEventListener("click", function () {
  counterNumber.innerText = +counterNumber.innerText + 1;
});
