export function suma(a, b) {
    return a + b;
}

export function resta(a, b) {
    return a - b;
}

export function multiplicacion(a, b) {
    return a * b;
}

export function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "No se puede dividir por 0";
    }
}