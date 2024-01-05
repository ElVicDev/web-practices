/* Aritmetic Operator en JS:
    + addicion
    - subtraction
    - multiplication
    / division
*/

/* Comparison operators in JS:
    >  greater than
    <  less than
    == equal
*/

console.log(2 + 2);
console.log(1 + 2 + 3 + 4 + 5);
console.log(20 + 18);
console.log(2 * 3);
console.log(8 / 1);
console.log(3 > 2);
console.log(2 > 3);
console.log(10 == 10);

// ----------------------------------

/* Utilización del operador lógico &&
Usted está codificando un juego RPG,
en el que cada personaje tiene ciertos niveles de habilidad
basados en el valor guardado en su puntuación.
    1.- Cree una variable llamada score y ajústela a 8
    2.- Utilice console.log() que incluye la cadena "Mid-level skills:"
        y compara la variable score por encima de 0 y por debajo de 10
        utilizando el operador && 
La salida esperada en la consola debería ser: "Mid-level skills: true".
*/

var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10);

//----------------------------------

/*Tarea 2: Utilizar el operador lógico ||
Imagine que está codificando un videojuego.
Actualmente, está a punto de codificar algunos fragmentos relacionados
con la condición de finalización del juego.
Debe codificar una nueva variable llamada timeRemaining
y establecerla en 0. También debe codificar una nueva variable
llamada energy y establecerla en 10.
A continuación, debe escribir un fragmento de código que pueda utilizarse
para determinar si el juego ha terminado,
en función de si el valor de la variable timeRemaining es 0
o el valor de la variable energy es 0.
Complete la tarea siguiendo los siguientes pasos:
    1.- Declare la variable timeRemaining, y asígnele el valor de 0.
    2.- Declare la variable energy, y asígnele el valor de 10.
    3.- Registre en la consola los siguientes parámetros: "Game over: ", y timeRemaining == 0 || energy == 0
Observe que la salida esperada en la consola debe ser: "Game over: true".
*/

