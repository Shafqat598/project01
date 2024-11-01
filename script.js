// Get references to HTML elements
const display = document.getElementById('display');
const menuBtn = document.getElementById('menuBtn');
const submenu = document.getElementById('submenu');

// Variables to store values and operation
let currentInput = '';
let operator = '';
let previousInput = '';

// Function to update the display
function updateDisplay(value) {
    display.value = value;
}

// Append numbers or decimal points to the display
function appendToDisplay(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

// Handle operator button clicks
function operate(op) {
    if (currentInput === '' && previousInput === '') return;

    if (previousInput && currentInput) {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Clear the display and reset variables
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('0');
}

// Perform the calculation
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = curr !== 0 ? prev / curr : 'Error';
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay(currentInput);
}

// Toggle the sub-menu visibility
menuBtn.addEventListener('click', () => {
    submenu.classList.toggle('hidden');
});

// Placeholder functions for sub-menu options
function enableScientificMode() {
    alert('Scientific Mode activated! (Coming soon)');
    submenu.classList.add('hidden');
}

function enableUnitConversion() {
    alert('Unit Conversion activated! (Coming soon)');
    submenu.classList.add('hidden');
}

function enableCurrencyConversion() {
    alert('Currency Conversion activated! (Coming soon)');
    submenu.classList.add('hidden');
}
