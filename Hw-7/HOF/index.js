const plus = (a, b) => {
  const result = a + b;
  return result;
};

const minus = (a, b) => {
  const result = a - b;
  return result;
};

const multiply = (a, b) => {
  const result = a * b;
  return result;
};

const devide = (a, b) => {
  const result = a / b;
  return result;
};

const calculator = (method, firstVal, secondVal) => {
  const res = method(firstVal, secondVal);
  console.log(`${method.name} ${res}`);
};

calculator(plus, 10, 2);
calculator(minus, 10, 2);
calculator(multiply, 10, 2);
calculator(devide, 10, 2);
