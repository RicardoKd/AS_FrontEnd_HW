const delTimInt = document.querySelector(".delTimersIntervals");

// Intervals
// Как я понял, динамически отслеживать количество Interval и Timeout нельзя, так что такой костыль
setInterval(() => {
  console.log("interval 1");
}, 1000);

let intervalId = setInterval(() => {
  console.log("interval 2");
}, 1000);

// Timeouts
setTimeout(() => {
  console.log("TIMEOUT 1");
}, 3500);

let timeoutId = setTimeout(() => {
  console.log("TIMEOUT 2");
}, 5500);

delTimInt.addEventListener("click", function () {
  while (intervalId > 0) {
    clearInterval(intervalId);
    intervalId -= 1;
  }
  while (timeoutId > 0) {
    clearTimeout(timeoutId);
    timeoutId -= 1;
  }
});

// **
// **
// **

const startBtn = document.querySelector(".start");
const timesUsedDiv = document.querySelector(".timesUsed");

let intervalUsed = 0;
let timeoutUsed = 0;

startBtn.addEventListener("click", function () {
  timeoutUsed += 1;
  setTimeout(() => {
    timesUsedDiv.insertAdjacentHTML("beforeend", `Timeout has been used ${timeoutUsed} times. <br>`);
  }, 5000);

  setInterval(() => {
    intervalUsed += 1;
    timesUsedDiv.insertAdjacentHTML("beforeend", `Timeout has been used ${intervalUsed} times. <br>`);
  }, 1000);
});
