let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerText = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput;
}

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && previousInput === '') return;
    if (currentInput === '') {
        operator = op;
        return;
    }
    if (operator !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.innerText = currentInput;
    }
}

function calculateResult() {
    if (previousInput === '' || currentInput === '' || operator === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    display.innerText = result;
    currentInput = result;
    operator = '';
    previousInput = '';
}
