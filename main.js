const calculator = require('./calculator');

const readlineSync = require('readline-sync');

function menu() {
    console.log("--------(Calculator)---------");
    console.log("Choose desired operation:");
    console.log("1 - Addition");
    console.log("2 - Subtraction");
    console.log("3 - Multiplication");
    console.log("4 - Division");
    console.log("5 - Exponentiation");
    console.log("0 - Exit");
    console.log("-------------------------------");
}

while (true) {
    menu();
    const op = readlineSync.question("Enter the desired option: ");

    if (op === '0') {
        break;
    }

    const num1 = parseFloat(readlineSync.question("Enter the first number: "));
    const num2 = parseFloat(readlineSync.question("Enter the second number: "));

    let result;
    switch (op) {
        case '1':
            result = calculator.addition(num1, num2);
            break;
        case '2':
            result = calculator.subtraction(num1, num2);
            break;
        case '3':
            result = calculator.multiplication(num1, num2);
            break;
        case '4':
            result = calculator.division(num1, num2);
            break;
        case '5':
            result = calculator.exponentiation(num1, num2);
            break;
        default:
            console.log("Invalid option");
            continue;
    }

    console.log("----------------------");
    console.log("Result: ", result);
}
