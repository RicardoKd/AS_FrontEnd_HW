const list = { value: 1, next: null };
let startNum = 1;
let lastObj = list;

const recursion = (untilNum) => {
  if (startNum < untilNum) {
    lastObj.next = {};
    lastObj = lastObj.next;
    startNum += startNum;
    lastObj.value = startNum;
    lastObj.next = null;
    recursion(untilNum);
  } else {
    console.log(list);
    return list;
  }
};

recursion(10);
