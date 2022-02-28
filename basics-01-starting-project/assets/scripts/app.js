let calcResult = 0;
function addBtnHandler() {
  let currentInput = +userInput.value;
  let prevResult = calcResult;
  calcResult += currentInput;
  userInput.value = "";
  userInput.focus();
  outputResult(calcResult, `${prevResult} + ${currentInput} = ${calcResult} `);
}
function subtractBtnHandler() {
  let currentInput = +userInput.value;
  let prevResult = calcResult;
  calcResult -= currentInput;
  userInput.value = "";
  userInput.focus();
  outputResult(calcResult, `${prevResult} - ${currentInput} = ${calcResult} `);
}
function divideBtnHandler() {
  let currentInput = +userInput.value;
  let prevResult = calcResult;
  calcResult /= currentInput;
  userInput.value = "";
  userInput.focus();
  outputResult(calcResult, `${prevResult} / ${currentInput} = ${calcResult} `);
}
function multiplyBtnHandler() {
  let currentInput = +userInput.value;
  let prevResult = calcResult;
  calcResult *= currentInput;
  userInput.value = "";
  userInput.focus();
  outputResult(calcResult, `${prevResult} * ${currentInput} = ${calcResult} `);
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
