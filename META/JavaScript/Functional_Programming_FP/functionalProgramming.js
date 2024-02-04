//  *   Functional Programming (FP)
/*  En la programación funcional, los datos y las funciones 
    que operan sobre ellos están claramente separados, 
    no se combinan dentro de los objetos.
*/

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);

// ----------------------------------------------------------
//  *   Ejemplo 2

//  Función que devuelve un doble de un número que recibió.
function doubleIt(num) {
  return num * 2;
}

//  Función que construye un objeto con un valor específico.
function objectMaker(val) {
  return {
    prop: val,
  };
}

console.log(objectMaker(20)); // { prop: 20 }

console.log(doubleIt(10).toString()); // Devuelve el número 20 como una cadena

console.log(objectMaker(doubleIt(100))); // { prop: 200 }

/*  Con la palabra clave return puedo tener múltiples llamadas a funciones, 
    devolviendo datos y manipulando valores.

    Poder devolver valores personalizados es uno de los fundamentos 
    que hacen posible la programación funcional.
*/
