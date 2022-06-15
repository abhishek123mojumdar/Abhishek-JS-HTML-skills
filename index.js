// Import stylesheets
import './style.css';

function getSize(size) {
  return function () {
    document.body.style.fontSize = size + 'px';
  };
}

var k = getSize(12);
var l = getSize(14);
var m = getSize(16);
document.getElementById('size-12').onclick = k;
document.getElementById('size-14').onclick = l;
document.getElementById('size-16').onclick = m;

var dash = (num) => {
  let numArr = getNumArr(num);
  for (let i = 0; i < numArr.length - 1; i++) {
    if (checkEven(numArr[i]) && checkEven(numArr[i + 1])) {
      numArr.splice(i + 1, 0, '-');
    }
  }

  let str = '';
  for (let i = 0; i < numArr.length - 1; i++) {
    str = str + numArr[i];
  }

  console.log(str);
};

function checkEven(num) {
  return num % 2 === 0 ? true : false;
}

function getNumArr(num) {
  let number = num;
  let numArr = [];
  while (number > 0) {
    let digit = number % 10;
    numArr.unshift(digit);
    number = Math.floor(number / 10);
  }
  return numArr;
}

dash(768776413361);
