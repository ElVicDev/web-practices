// * BUGS AND ERRORS

//  Ejemplo de un programa que funciona correctamente
function addNums(a, b) {
  console.log(a + b);
}
addNums(1, 2);
console.log("Still running");

// Ejemplo del programa anterior que funciona pero no de forma correcta (BUG)
function addNums(a, b) {
  console.log(a + b);
}
addNums("1", 2);
/*  En este caso hay una cadena que se concatena con el número 
    y nos da como resutado 12, lo cual es incorrecto 
    ya que lo que necesito es una suma de dos números.
    El programa se ejecuta correctamente pero no es el resultado esperado.
    A esto se le conoce como BUG
*/
console.log("Still running");

// ------------------------------------------------------------------------

// Ejemplo de un programa que marcará un ERROR (REFERENCE ERROR)
/*  En el siguiente programa nos marcara un error, ya que no hemos declarado 
    las variables, por lo tanto javascript marcará error de referencia 
    y la siguiente línea no se ejecutará.
*/
console.log(c + d);
console.log("This line never runs");

/* En javascript existen tres tipos de errores
    1.- Syntax Error
    2.- Type Error
    3.- Reference Error
*/

// ------------------------------------------------------------------------

//  Ejemplo de SYNTAX ERROR
//  var word = "hello;
//  En el ejemplo anterior no cerramos comillas generando un Syntax Error

// ------------------------------------------------------------------------

//  Ejemplo de TYPE ERROR
(5).pop;
//  Ejemplo de un Type Error. Nos marcará que no es una función

// ------------------------------------------------------------------------
