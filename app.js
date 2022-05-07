//variables
const container = document.querySelector(".container");

// functions

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operator, numberOne, numberTwo) {
  if (operator == "multiply") {
    return multiply(numberOne, numberTwo);
  } else if (operator == "add") {
    return add(numberOne, numberTwo);
  } else if (operator == "substract") {
    return substract(numberOne, numberTwo);
  } else if (operator == "divide") {
    return divide(numberOne, numberTwo);
  }
}

//selectors
let btns = container.querySelectorAll(".btn");
let tempOne = "";
let tempOp = "";
let tempTwo = "";
let operation = { numberOne: "", operation: "", numberTwo: "" };

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let choice = e.target.id;

    if (!isNaN(parseInt(choice)) && !operation.operation) {
      tempOne += choice;
      operation.numberOne = tempOne;
      console.log(operation);
      return tempOne;
    } else if (!isNaN(parseInt(choice)) && operation.operation) {
      tempTwo += choice;
      operation.numberTwo = tempTwo;
      console.log(operation);
      return tempTwo;
    } else if (isNaN(parseInt(choice)) && choice !== "equal") {
      operation.operation = choice;
      console.log(operation);
      return tempOp;
    } else if (choice == "equal") {
      let result = operate(
        operation.operation,
        parseInt(operation.numberOne),
        parseInt(operation.numberTwo)
      );
      tempOne = result.toString();
      tempTwo = "";
      operation = {
        numberOne: result.toString(),
        operation: "",
        numberTwo: "",
      };
      console.log(result);
      console.log(operation);
      return result;
    }
  })
);
