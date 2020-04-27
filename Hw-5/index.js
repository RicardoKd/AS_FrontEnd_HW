const objWithTwoNumbers = {
  num1: 12,
  num2: 4
}

const object = {
  num: 2,
  str: "Hello",
  bool: true,
  undef: undefined,
  nul: null,
  symbol: Symbol(),
  objInObj: { 
    method: (obj) => {
      let { num1, num2 } = obj;
      return num1 / num2;
    }
  }
}

const {...rest} = object;
console.log(rest);

const {method} = object.objInObj;

console.log(method(objWithTwoNumbers));
