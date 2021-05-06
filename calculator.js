let operator;

function add(num1, num2) {
    result = num1 + num2;
    return result;
};

function subtract(num1, num2) {
    result = num1 - num2;
    return result;
};

function multiply(num1, num2) {
    result = num1 * num2;
    return result;
};

function divide(num1, num2) {
    result = num1 / num2;
    return result;
};

function operate(operator, num1, num2) {

    switch(operator){
        case "Sum":
            add(num1, num2);
            break;
        
        case "Diff":
            subtract(num1, num2);
            break;

        case "Prod":
            multiply(num1, num2);
            break;
        
        case "Div":
            divide(num1, num2);
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