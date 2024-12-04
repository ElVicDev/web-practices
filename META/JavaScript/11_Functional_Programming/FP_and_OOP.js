// * -----------------------------------------
// * El paradigma de la programación funcional
// * -----------------------------------------

// En la programación funcional, utilizamos muchas funciones y variables.
function getTotal(a, b) {
  return a + b;
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);

/* En la programación funcional, las funciones devuelven nuevos valores 
y luego utilizan esos valores en alguna otra parte del código. */
function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== ESTO AQUI!

// * ----------------------------------------------------------------

/*  Otro estilo es laprogramación orientada a objetos (POO). 
    En este estilo, agrupamos los datos y la funcionalidad como 
    propiedades y métodos dentro de objetos. */
var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
  },
};
console.log(virtualPet.sleepy); // true
virtualPet.nap();
console.log(virtualPet.sleepy); // false

// * ----------------------------------------------------------------
// * Hay muchos más conceptos e ideas en la programación funcional.
// * Funciones de primera clase
// * Funciones de orden superior
// * Funciones puras y efectos secundarios
// * ----------------------------------------------------------------

/* FUNCIONES DE PRIMERA CLASE
Una función en JavaScript es otro valor que podemos
    - pasar a otras funciones
    - guardar en una variable
    - devolver de otras funciones
En otras palabras, una función en JavaScript es sólo un valor - desde
este punto de vista, casi no difiere de una cadena o un número. */

function addTwoNums(a, b) {
  console.log(a + b);
}

function randomNum() {
  return Math.floor(Math.random() * 10 + 1);
}
function specificNum() {
  return 42;
}

var useRandom = true;

var getNumber;

if (useRandom) {
  getNumber = randomNum;
} else {
  getNumber = specificNum;
}

addTwoNums(getNumber(), getNumber());

// * ----------------------------------------------------------------
// * FUNCIONES DE ORDEN SUPERIOR
/*  Es una función que tiene una o ambas de las siguientes características:
    - Acepta otras funciones como argumentos
    - Devuelve funciones cuando se invoca */
/*

function addTwoNums(getNumber1, getNumber2) {
  console.log(getNumber1() + getNumber2());
}

addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number
*/
// * ----------------------------------------------------------------

// * ----------------------------------------------------------------
// * FUNCIONES PURAS Y EFECTOS SECUNDARIOS
/*  Una función pura devuelve exactamente el mismo resultado siempre 
    que se le den los mismos valores.
    Un ejemplo de función pura es la función addTwoNums() */

function addTwoNums(a, b) {
  console.log(a + b);
}

addTwoNums(5, 6); // 11

// * ----------------------------------------------------------------
