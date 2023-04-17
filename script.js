const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentVal = "";
let firstVal = "";
let operator = "";
let result = "";

function clearDisplay() {
  currentVal = "";
  firstVal = "";
  operator = "";
  result = "";
  display.textContent = "0";
}

function handleNumberClick(e) {
  const number = e.target.textContent;
  currentVal += number;
  display.textContent = currentVal;
}

function handleOperatorClick(e) {
  operator = e.target.textContent;
  firstVal = currentVal;
  currentVal = "";
}

function calculateResult() {
  const num1 = parseFloat(firstVal);
  const num2 = parseFloat(currentVal);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "÷":
      result = num1 / num2;
      break;
    case "×":
      result = num1 * num2;
      break;
    default:
      result = "";
  }

  currentVal = result.toString();
  display.textContent = currentVal;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonType = e.target.id;

    switch (buttonType) {
      case "btn-0":
      case "btn-1":
      case "btn-2":
      case "btn-3":
      case "btn-4":
      case "btn-5":
      case "btn-6":
      case "btn-7":
      case "btn-8":
      case "btn-9":
        handleNumberClick(e);
        break;
      case "btn-add":
      case "btn-minus":
      case "btn-divide":
      case "btn-mult":
        handleOperatorClick(e);
        break;
      case "btn-ans":
        calculateResult();
        break;
      case "btn-clear":
        clearDisplay();
        break;
      default:
        break;
    }
  });
});
