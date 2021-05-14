let operator;
let calcContainer = document.querySelector('.calculator');
let calcDisplay = document.querySelector('#display');
let displayTotal = " "; //use calcDisplay.textContent to manipulate calc display
let btn = document.querySelector('.Buttons');

let zeroBtn = document.getElementById('048Button');
let oneBtn = document.getElementById('049Button');
let twoBtn = document.getElementById('050Button');
let threeBtn = document.getElementById('051Button');
let fourBtn = document.getElementById('052Button');
let fiveBtn = document.getElementById('053Button');
let sixBtn = document.getElementById('054Button');
let sevenBtn = document.getElementById('055Button');
let eightBtn = document.getElementById('056Button');
let nineBtn = document.getElementById('057Button');
let clearBtn = document.getElementById('clearButton');
let eraseBtn = document.getElementById('eraseButton');


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
    displayTotal = " ";
    calcDisplay.textContent = 0;
};

function backspace() {

};

function roundNum() {

};

function displayValue(result) {
    calcDisplay.textContent = result;

}

clearBtn.addEventListener("click", () => clear());
eraseBtn.addEventListener("click", function () {
    displayTotal = displayTotal.slice(0, -1);
    calcDisplay.textContent = displayTotal;
});

oneBtn.addEventListener("click", function () {
    displayTotal += "1";
    calcDisplay.textContent = displayTotal;
});

twoBtn.addEventListener("click", function () {
    displayTotal += "2";
    calcDisplay.textContent = displayTotal;
});

threeBtn.addEventListener("click", function () {
    displayTotal += "3";
    calcDisplay.textContent = displayTotal;
});

fourBtn.addEventListener("click", function () {
    displayTotal += "4";
    calcDisplay.textContent = displayTotal;
});

fiveBtn.addEventListener("click", function () {
    displayTotal += "5";
    calcDisplay.textContent = displayTotal;
});

sixBtn.addEventListener("click", function () {
    displayTotal += "6";
    calcDisplay.textContent = displayTotal;
});

sevenBtn.addEventListener("click", function () {
    displayTotal += "7";
    calcDisplay.textContent = displayTotal;
});

eightBtn.addEventListener("click", function () {
    displayTotal += "8";
    calcDisplay.textContent = displayTotal;
});

nineBtn.addEventListener("click", function () {
    displayTotal += "9";
    calcDisplay.textContent = displayTotal;
});

zeroBtn.addEventListener("click", function () {
    displayTotal += "0";
    calcDisplay.textContent = displayTotal;
});


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operate,
}