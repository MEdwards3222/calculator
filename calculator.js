let operator;
let calcContainer = document.querySelector('#calcContainer');
let calcDisplay = document.querySelector('#display');
let displayTotal = 0; //use calcDisplay.textContent to manipulate calc display

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {

    switch(operator){
        case "Sum":
            return add(num1, num2);
            break;
        
        case "Diff":
            return subtract(num1, num2);
            break;

        case "Prod":
            return multiply(num1, num2);
            break;
        
        case "Div":
            return divide(num1, num2);
            break;
    };

};

function clear() {

};

function backspace() {

};

function roundNum() {

};

function displayValue() {

}



module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operate,
}