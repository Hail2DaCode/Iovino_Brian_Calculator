var display1 = "";
var display2 = ""; 
var operatorStatus = false;
var operator = "";
function press(number) {
    if (!operatorStatus)  {
    var displayDiv = document.querySelector('#display')
    display1 = display1 + number;
    displayDiv.innerText = display1;
    console.log(display1);
    }
    else if (operatorStatus) {
        var displayDiv = document.querySelector('#display');
        display2 = display2 + number;
        displayDiv.innerText = display2;
        console.log(display2);
    }
}
function setOP(operatorVal) {
    operatorStatus = true;
    console.log(operatorVal)
    operator = operatorVal;
    console.log(operator);
    display2 = "";
}
function calculate() {
    if (operator == "+") {
        var result = (display1 * 1) + (display2 * 1);
        // toString(result);  
    }
    else if (operator == "-") {
        var result = display1 - display2; 
    }
    else if (operator == "*") {
        var result = display1 * display2; 
    }
    else if (operator == "/") {
        var result = display1 / display2;
    }
    var displayDiv = document.querySelector('#display');
    displayDiv.innerText = result;
    operatorStatus = false;
    display1 = result;
    display2 = "";
}
function clr() {
    var displayDiv = document.querySelector('#display');
    displayDiv.innerText = 0;
    display1 = "";
    display2 = "";
}