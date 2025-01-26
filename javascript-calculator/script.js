const answer = document.getElementById('answer');
const display = document.getElementById('display');
const inputs = document.querySelectorAll('.input');
const clearButton = document.getElementById('clear');
const operators = document.querySelectorAll('.operation');
const equalTo = document.getElementById('equals');
const decimal = document.getElementById('decimal');

let prevInput = 0;
let currentInput = 0;
let currentOutput = 0;
let currentOperator = null;
let prevOperator = null;
let result = 0;
let expression = "";

function handleInput(event) {
    const key = event.target.textContent;

    // If there's an equals sign already in the answer, reset the calculator.
    if (answer.textContent.includes("=")) {
        answer.textContent = "";
        display.textContent = "0";
        currentInput = 0;
        prevInput = 0;
        result = 0;
        currentOperator = null;
        expression = "";
    }

    // Prevent inputting multiple zeros at the start
    if ((display.textContent === "0" && key === "0") 
        || (display.textContent === "." && key === ".")
    ) return;

    // Handle appending numbers to the display
    if (answer.textContent === "0" || answer.textContent.includes("=")) {
        answer.textContent = key;
        display.textContent = key;
        expression = key;
    } else {
        answer.textContent += key;
        display.textContent = key;
        expression += key;
    }

    currentInput = parseFloat(expression);
    console.log("Current Input:", currentInput, "Expression:", expression);
}

function handleOperator(event) {
    const key = event.target.textContent;

    // Handle if "=" was pressed before an operator
    if (answer.textContent.includes("=")) {
        answer.textContent = currentInput.toString();
        display.textContent = "0";
        expression = currentInput.toString();
        prevInput = 0;
        result = 0;
        currentOperator = null;
    }

    // Handle consecutive operators
    if (currentOperator === key && expression === "") {
        answer.textContent = answer.textContent.slice(0, -2) + ` ${key} `;
        display.textContent = key;
        currentOperator = key;
        return;
    }

    if (currentOperator) {
        prevOperator = currentOperator;
        answer.textContent += ` ${key} `;
        display.textContent = key;
        currentOperator = key;
        return;
    }

    answer.textContent += ` ${key} `;
    display.textContent = key;
    prevInput = currentInput;
    prevOperator = null;
    currentOperator = key;
    expression = "";

    console.log("Current Operator", currentOperator, "Previous Operator", prevOperator, "Previous Input", prevInput, "Current Input:", currentInput);
}

function calculate() {
    if (isNaN(currentInput) || isNaN(prevInput)) return;

    let operator = null;
    
    if (prevOperator) {
        operator = prevOperator;
    } else {
        operator = currentOperator;
    }

    switch (currentOperator) {
        case "+":
            result = prevInput + currentInput;
            break;
        case "-":
            result = prevInput - currentInput;
            break;
        case "x":
            result = prevInput * currentInput;
            break;
        case "/":
            result = currentInput === 0 ? "MATH ERROR" : prevInput / currentInput;
            break;
    }

    currentInput = result;
    prevInput = 0;
    display.textContent = result.toString();
    answer.textContent += ` = ${result.toString()}`;
    console.log("Result:", result, "Current Input:", currentInput);

    // Handle math error for division by zero
    if (result === "MATH ERROR") {
        display.textContent = "MATH ERROR";
        answer.textContent = "Cannot divide by zero.";
        resetCalculator();
        return;
    }
}

function resetCalculator() {
    prevInput = 0;
    currentInput = 0;
    currentOperator = null;
    result = 0;
    expression = "";
}

function clearCalc() {
    display.textContent = "0";
    answer.textContent = "0";
    expression = "0";
    resetCalculator();
}

// Prevent multiple decimals in a number
function handleDecimal(event) {
    if (display.textContent.includes(".")) return; // Prevent adding another decimal
    display.textContent += ".";
    answer.textContent += ".";
    expression += ".";
}

inputs.forEach(input => {
    input.addEventListener('mousedown', handleInput);
});

operators.forEach(operator => {
    operator.addEventListener('mousedown', handleOperator);
});

equalTo.addEventListener('mousedown', calculate);
clearButton.addEventListener('mousedown', clearCalc);
decimal.addEventListener('mousedown', handleDecimal);
