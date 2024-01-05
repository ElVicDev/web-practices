/* Arithmetic Operators en JS:
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

/* Utilizar el operador lógico ||
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
    3.- Registre en la consola los siguientes parámetros:
        "Game over: ", y timeRemaining == 0 || energy == 0
Observe que la salida esperada en la consola debe ser: "Game over: true".
*/

var timeRemaining = 0;
var energy = 10;
console.log("Game over: ", timeRemaining == 0 || energy == 0);

//----------------------------------

/* Utilizar el operador de módulo, %, para comprobar si un número dado es impar
Necesita codificar un pequeño programa que tome un número
y determine si es un número par (como 2, 4, 6, 8, 10).
Se necesita declarar seis variables, como se indica a continuación:
    1.- A la primera variable, llamada num1,
        se le debe asignar un valor numérico de 2.
    2.- A la segunda variable, llamada num2,
        se le debe asignar un valor numérico de 5.
    3.- A la tercera variable, llamada test1,
        se le debe asignar el cálculo de num1 % 2. Nota: la ejecución de este código devolverá un número.
    4.- A la cuarta variable, llamada test2,
        se le debe asignar el cálculo de num2 % 2. Nota: la ejecución de este código también devolverá un número.
    5.- A la quinta variable, llamada result1,
        se le debe asignar el resultado de comparar si el número almacenado en la variable test1 no es igual a 0, es decir, esto: test1 == 0.
    6.- A la sexta variable, llamada result2,
        se le debe asignar el resultado de comparar si el número almacenado en la variable test2 no es igual a 0, en otras palabras, test2 == 0.
Ejecute el registro de la consola dos veces después de haber configurado las variables:
    1.- El primer registro de consola debería tener el siguiente código
        entre paréntesis: "Is", num1, "an even number?", result1
    2.- El segundo registro de la consola debe tener el siguiente código
        entre paréntesis: "Is", num2, "an even number?", result2
Nota: La salida a la consola debería ser la siguiente:
Is 2 an even number? true
Is 5 an even number? false
*/

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

//----------------------------------

/* Sumar números utilizando el operador +
Registre en la consola el resultado de sumar dos números, 5 y 10,
utilizando el operador +.
Nota: Se debe completar en una sola línea de código.
La salida en la consola debe ser 15.
*/

console.log(5 + 10);

//----------------------------------

/* Concatene números y cadenas utilizando el operador +
Codifique tres variables:
    1.- La primera variable debe ser una cadena con el siguiente valor:
        "Now in ". Nombre la variable now.
    2.- La segunda variable debe ser un número con el valor:
        3. Nombre la variable three.
    3.- La tercera variable debe ser una cadena con el siguiente valor:
        "D!". Nombre la variable d.
    4.- Registre en la consola el siguiente código:
        now + three + d.
Nota: La salida esperada debería ser: "Now in 3D!".
*/

var now = "Now in ";
var three = 3;
var d ="D!";
console.log(now + three + d);

//----------------------------------

/* Utilizar el operador += para acumular valores en una variable
Codifique una nueva variable y nómbrela counter, asignándole el valor de 0.
En la línea siguiente, utilice el operador += para incrementar
el valor de contador en 5.
En la línea siguiente, utilice el operador += para aumentar
el valor de contador en 3.
En la cuarta línea, registre en la consola el valor de la variable counter.
Nota: El valor de salida debe ser 8.
*/

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);

