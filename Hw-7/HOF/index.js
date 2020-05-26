const pls = (a, b) => a + b;
const mns = (a, b) => a - b;
const mlt = (a, b) => a * b;
const dvd = (a, b) => a / b;

const calc = (method, firstVal, secondVal) => {
  const res = method(firstVal, secondVal);
  console.log(`${method.name} ${res}`);
};

calc(pls, 10, 2);
calc(mns, 10, 2);
calc(mlt, 10, 2);
calc(dvd, 10, 2);
