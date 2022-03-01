const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "*";
const DIVIDE = "/";
let calcResult = 0;
let operation;
function calculator(operation) {
  let currentInput = +userInput.value;
  let prevResult = calcResult;
  if (operation == ADD) {
    calcResult += currentInput;
  } else if (operation == SUBTRACT) {
    calcResult -= currentInput;
  } else if (operation == MULTIPLY) {
    calcResult *= currentInput;
  } else {
    calcResult /= currentInput;
  }
  output(prevResult, currentInput);
}
function output(prevResult, currentInput) {
  userInput.value = "";
  userInput.focus();
  outputResult(
    calcResult,
    `${prevResult} ${operation} ${currentInput} = ${calcResult} `
  );
}
function addBtnHandler() {
  operation = "+";
  calculator(operation);
}
function subtractBtnHandler() {
  operation = "-";
  calculator(operation);
}
function divideBtnHandler() {
  operation = "/";
  calculator(operation);
}
function multiplyBtnHandler() {
  operation = "*";
  calculator(operation);
}
function resetBtnHandler() {
  calcResult = 0;
  outputResult(0, 0);
  userInput.value = "";
  userInput.focus();
}
addBtn.addEventListener("click", addBtnHandler);
subtractBtn.addEventListener("click", subtractBtnHandler);
multiplyBtn.addEventListener("click", multiplyBtnHandler);
divideBtn.addEventListener("click", divideBtnHandler);
resetBtn.addEventListener("click", resetBtnHandler);
