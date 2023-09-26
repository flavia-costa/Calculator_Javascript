function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    } else {
        return a / b;
    }
}

function exponentiation(a, b) {
    return a ** b;
}


module.exports = {
    addition,
    subtraction,
    multiplication,
    division,
    exponentiation
};
