const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "*";
const DIVIDE = "/";
let calcResult = 0;
let operation;
const operationsArray = [];

function output(prevResult, currentInput) {
  logOperations(prevResult, currentInput, calcResult);
  userInput.value = "";
  userInput.focus();
  outputResult(
    calcResult,
    `${prevResult} ${operation} ${currentInput} = ${calcResult} `
  );
}
//log operations
function logOperations(prev, curr, result) {
  const singleOperator = {
    prevValue: prev,
    operation: operation,
    currentValue: curr,
    operationResult: result,
  };
  operationsArray.push(singleOperator);
  console.log(operationsArray);
}

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

function addBtnHandler() {
  calculator(" + ");
}
function subtractBtnHandler() {
  calculator(" - ");
}
function divideBtnHandler() {
  calculator(" / ");
}
function multiplyBtnHandler() {
  calculator(" * ");
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
