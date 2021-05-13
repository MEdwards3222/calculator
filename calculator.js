let operator;
let calcContainer = document.querySelector('.calculator');
let calcDisplay = document.querySelector('#display');
let displayTotal = 0; //use calcDisplay.textContent to manipulate calc display
let btn = document.querySelector('.Buttons');
let zeroBtn = document.getElementById('055Button');


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
    calcDisplay.textContent = 0;
};

function backspace() {

};

function roundNum() {

};

function displayValue(result) {
    calcDisplay.textContent = result;

}



module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operate,
}