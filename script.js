let num1 = '';
let num2 = '';
let operator;
let response;
const result = document.querySelector(".res");
const buttonNumb = document.querySelectorAll(".number");
const buttonClear = document.querySelector(".clear");
const buttonOperator = document.querySelectorAll(".operator");
const buttonEquals = document.querySelector(".equals");

buttonNumb.forEach((button) => {
  button.addEventListener("click", () => {
    result.textContent += button.textContent;
  });
});
buttonClear.addEventListener("click", () => {
  result.textContent = "";
  num1 = ''
  num2 = ''
});
buttonOperator.forEach((buttonOp) => {
  buttonOp.addEventListener("click", () => {
    // if(num1 !== '' && num2 !== ''){
    //   num2 = parseInt(result.textContent)
    //   operate(operator, num1, num2)
    // }
    num1 = result.textContent;
    result.textContent = "";
    operator = buttonOp.textContent;
    console.log(num1);
    console.log(num2);
  });
});
buttonEquals.addEventListener("click", () => {
  num2 = result.textContent;
  result.textContent = "";
  operate(operator, num1, num2);
});

function add(number1, number2) {
	response = parseInt(number1) + parseInt(number2)
	result.textContent = response
}
function subtract(number1, number2) {
	response = parseInt(number1) - parseInt(number2)
	result.textContent = response
}
function multiply(number1, number2) {
	response = parseInt(number1) * parseInt(number2)
	result.textContent = response
}
function divide(number1, number2) {
	response = parseInt(number1) / parseInt(number2)
	result.textContent = response
}
function operate(operator, number1, number2) {
  switch (operator) {
    case "+":
      add(number1, number2);
      break;
    case "-":
      subtract(number1, number2);
      break;
    case "x":
      multiply(number1, number2);
      break;
    case "/":
      divide(number1, number2);
      break;
  }
}
