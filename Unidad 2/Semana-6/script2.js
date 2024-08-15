import { saludar, notificacion } from "./script3.js";
import { suma, resta, multiplicacion, division } from "./script1.js";

console.log(saludar("futuras desarrolladoras"));
alert(notificacion("No hay nada que mostrar"));

let dato1 = parseInt(prompt("Ingrese el valor de a:"));
let dato2 = parseInt(prompt("Ingrese el dato de b:"));

let sumaResultado = suma(dato1, dato2);
let restaResultado = resta(dato1, dato2);
let multiplicacionResultado = multiplicacion(dato1, dato2);
let divisionResultado = division(dato1, dato2);

document.getElementById("operador").innerHTML = `
    Suma: ${sumaResultado} <br>
    Resta: ${restaResultado} <br>
    Multiplicación: ${multiplicacionResultado} <br>
    División: ${divisionResultado}
`;