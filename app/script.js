const display = document.getElementById("ques");
const output = document.getElementById("ans");
const buttons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalto = document.getElementById("equal");
let firstOperation = "";
let operation = "";
let secondOperation = "";
function calculate() {
  switch (operation) {
    case "-":
      console.log("hi");
      display.value = firstOperation + operation + secondOperation + "=";
      output.value = Number(firstOperation) - Number(secondOperation);
      break;
    case "+":
      display.value = firstOperation + operation + secondOperation + "=";
      output.value = Number(firstOperation) + Number(secondOperation);
      break;
    case "*":
      display.value = firstOperation + operation + secondOperation + "=";
      output.value = Number(firstOperation) * Number(secondOperation);
      break;
    case "/":
      display.value = firstOperation + operation + secondOperation + "=";
      output.value = Number(firstOperation) / Number(secondOperation);
      break;
    default:
      console.log(operation);
      break;
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    if (operation == "") {
      firstOperation += buttonValue;
      display.value = firstOperation;
    } else {
      secondOperation += buttonValue;
      display.value += secondOperation;
    }
  });
});
operators.forEach((operate) => {
  operate.addEventListener("click", () => {
    if (operation == "") {
      operation = operate.textContent;
      display.value = firstOperation + operation;
    } else {
      calculate();
      operation = operate.textContent;
      firstOperation = display.value;
      secondOperation = "";
      output.value = firstOperation + operation;
      display.value = firstOperation;
    }
  });
});
document.querySelector("#clear").addEventListener("click", clear);
function clear() {
  display.value = "";
  firstOperation = "";
  operation = "";
  secondOperation = "";
  output.value = "";
}

document.querySelector("#equal").addEventListener("click", calculate);
