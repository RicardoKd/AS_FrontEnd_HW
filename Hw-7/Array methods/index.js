const arr = [1, 2, 3, 4, 5, { hello: "world" }];

// Удалить объект
arr.find((val, index) => {
  if (typeof val === "object") {
    arr.splice(index, 1);
    return true;
  }
  return false;
});
console.log(arr);

// Соединить все данные в строку через разделитель " и "
const str = arr.join(" и ");
console.log(str);

// Заменить цифру 4 на цифру 10 и развернуть задом на перед
arr.find((val, index) => {
  if (val === 4) {
    arr[index] = 10;
    return true;
  }
  return false;
});
console.log(arr);
const reverseArr = arr.reverse();
console.log(reverseArr);
