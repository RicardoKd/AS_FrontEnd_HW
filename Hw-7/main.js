let calculator = {
  read () {
    this.numbersArr = prompt("Enter numbers with a space between each:").split(" ");
    console.log(this.numbersArr);
    
  },

  sum () {
    let sumNum = 0;
    for (let i = 0; i < this.numbersArr.length; i++) {
      sumNum += +this.numbersArr[i];
    }
    return sumNum;
  },

  mul () {
    let mulNum = 1;
    for (let i = 0; i < this.numbersArr.length; i++) {
      mulNum *= this.numbersArr[i];
    }
    return mulNum;
  }
}

const { read, sum, mul } = calculator;

read();