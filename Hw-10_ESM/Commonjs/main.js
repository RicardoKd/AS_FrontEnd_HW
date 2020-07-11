// 4) В файле data.js создать две переменные NUMBER_1 NUMBER_2
// 5) В файле utils.js создать две простые функции одна из которых добавляет, вторая отнимает
// 6) В файле main.js импортировать 2 файла выше и произвести операции вместе с переменными и функциями

const { NUMBER_1, NUMBER_2 } = require("./data.js");
const { FUNC_1, FUNC_2 } = require("./utils.js");

console.log(`Adding returns: ${FUNC_1(NUMBER_1, NUMBER_2)}. Minusing returns: ${FUNC_2(NUMBER_1, NUMBER_2)}`);
