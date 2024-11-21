let numBTN = document.querySelectorAll(".num");
let display = document.querySelector("#display");
let operatorsBtn = document.querySelectorAll(".opBTN");
let clearBTn = document.querySelector(".clear");
let equal = document.querySelector("#Equals");
function add(a, b) {
  return +a + +b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "lmao, cannot divide by Zero";
  }
  return a / b;
}

let Number1 = "";
let operator = "";
let Number2 = "";
let displayContent;
let storedNumber = "";
let answer = "";
// let a = prompt("enter the first number")
// let b = prompt("enter the second number")
// let operator = prompt("enter the operator")

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid input"; // Handles invalid inputs
  }
}
//Create the functions that populate the display when you click the digit buttons
numBTN.forEach((button) =>
  button.addEventListener("click", () => {
    // answer = ""
    display.value += button.value;
    displayContent = display.value;
    // Number1 += button.value;
    storedNumber += button.value;
    //Make N1's limit is when the operator is clicked
    if (operator === "") {
      Number1 += button.value;
    } else {
      Number2 += button.value;
    }
    // answer != "" ? displayContent= "" : displayContent = answer;
  })
);
operatorsBtn.forEach((opBTN) =>
  opBTN.addEventListener("click", () => {
    display.value += opBTN.value;
    displayContent = display.value;
    //stores the operator (i think we gonna need it :D)
    operator += opBTN.value;
  })
);
clearBTn.addEventListener("click", () => {
  display.value = "";
  displayContent = "";
  storedNumber = "";
  operator = "";
  Number1 = "";
  Number2 = "";
  answer = "";
});

equal.addEventListener("click", () => {
  a = Number1;
  b = Number2;
  answer = operate(a, b, operator);
  display.value = answer;
  Number1 = answer;
  //display a snarky error message when divide by 0
  Number2 == 0 && operator == "/"
    ? (display.value = "اعقل يسطا")
    : console.log(`The answer is: ${answer}`);
});
