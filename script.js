 var newLine = true; // Indicates whether a new line is being started
 var value1;
 var currentOperator;

 // Function to handle operator button presses
function digitBtnPressed(button) {
    if (newLine) {
        document.getElementById("display").value = button;
        newLine = false;
    } else {
        var currentValue = document.getElementById("display").value;
        document.getElementById("display").value = currentValue + button;
    }
}

//function for Ac button getting pressed 
function clearDisplay() {
    document.getElementById("display").value = 0;
    newLine = true;
}

// functions for operator buttons getting pressed
function operatorBtnPressed(operator) {
    currentOperator = operator;
    value1 = parseInt(document.getElementById("display").value);
    newLine = true;
    }

    //function for equal button getting pressed
function calculateResult() {
    var value2 = parseInt(document.getElementById("display").value);
    var result;

    switch (currentOperator) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            result = value1 / value2;
            break;
        default:
            result = "Error";
    }

    document.getElementById("display").value = result;
    newLine = true;
}