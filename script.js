let numb1;
let numb2;
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
});
buttonOperator.forEach((buttonOp) => {
  buttonOp.addEventListener("click", () => {
    num1 = parseInt(result.textContent);
    result.textContent = "";
    operator = buttonOp.textContent;
  });
});
buttonEquals.addEventListener("click", () => {
  num2 = parseInt(result.textContent);
  result.textContent = "";
  operate(operator, num1, num2);
});

function add(number1, number2) {
	response = number1 + number2
	result.textContent = response
}
function subtract(number1, number2) {
	response = number1 - number2
	result.textContent = response
}
function multiply(number1, number2) {
	response = number1 * number2
	result.textContent = response
}
function divide(number1, number2) {
	response = number1 / number2
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
