//variables
const container = document.querySelector(".container");
const screenText = container.querySelector(".screenText");

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

function isInt(n) {
  return n % 1 === 0;
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
let operation = { numberOne: "", operation: "", numberTwo: "" };

function doMaths(e) {
  let choice = e.target.id;

  if (!isNaN(parseInt(choice)) && !operation.operation) {
    operation.numberOne += choice;
    screenText.textContent = operation.numberOne;
    return operation.numberOne;
  } else if (!isNaN(parseInt(choice)) && operation.operation) {
    operation.numberTwo += choice;
    screenText.textContent = operation.numberTwo;
    return operation.numberTwo;
  } else if (
    isNaN(parseInt(choice)) &&
    choice !== "equal" &&
    operation.numberOne
  ) {
    operation.operation = choice;
    if (choice == "multiply") {
      screenText.textContent = "*";
    } else if (choice == "add") {
      screenText.textContent = "+";
    } else if (choice == "substract") {
      screenText.textContent = "-";
    } else if (choice == "divide") {
      screenText.textContent = "/";
    }
    return operation.operation;
  } else if (choice == "equal") {
    let result = operate(
      operation.operation,
      parseInt(operation.numberOne).toFixed(2),
      parseInt(operation.numberTwo).toFixed(2)
    );
    operation = {
      numberOne: result.toString(),
      operation: "",
      numberTwo: "",
    };

    screenText.textContent = isInt(result) ? result : result.toFixed(2);
    return result;
  }
}

btns.forEach((btn) => btn.addEventListener("click", doMaths));
