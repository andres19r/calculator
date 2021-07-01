let num1 = '';
let num2 = '';
let operator = '';
let response;
let sw = false;
const result = document.querySelector(".res");
const buttonNumb = document.querySelectorAll(".number");
const buttonClear = document.querySelector(".clear");
const buttonOperator = document.querySelectorAll(".operator");
const buttonEquals = document.querySelector(".equals");
const buttonDec = document.querySelector(".point");

function clearResult(){
  result.textContent = ''
}
buttonNumb.forEach((button) => {
  button.addEventListener("click", () => {
    if (!sw) {
      clearResult()
      sw = true
    }
    result.textContent += button.textContent;
  });
});
buttonDec.addEventListener("click", () => {
  if(result.textContent.indexOf('.') === -1){
    result.textContent += '.'
  }
})
buttonClear.addEventListener("click", () => {
  clearResult()
  num1 = ''
  num2 = ''
});
buttonOperator.forEach((buttonOp) => {
  buttonOp.addEventListener("click", () => {
    if(num1 !== ''){
      num2 = result.textContent
      operate(operator, num1, num2)
      num1 = result.textContent;
      operator = buttonOp.textContent;
    }else{
      num1 = result.textContent;
      operator = buttonOp.textContent;
    }
    sw = false
  });
});
buttonEquals.addEventListener("click", () => {
  if(num1 === ''){
    result.textContent = ''
  }else{
    num2 = result.textContent;
    operate(operator, num1, num2);
    num1 = ''
    num2 = ''
    sw = false
  }
});

function add(number1, number2) {
	response = Number(number1) + Number(number2)
	result.textContent = response
}
function subtract(number1, number2) {
	response = Number(number1) - Number(number2)
	result.textContent = response
}
function multiply(number1, number2) {
	response = Number(number1) * Number(number2)
	result.textContent = response
}
function divide(number1, number2) {
  if(number2 === '0'){
    result.textContent = "Can't divide per 0"
  }else{
    response = Number(number1) / Number(number2)
    result.textContent = response
  }
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
