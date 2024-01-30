//  * Errores de sintaxis, lógicos y de ejecución

/*  Estos son algunos de los errores más comunes en JavaScript: 
    ReferenceError 
    SyntaxError 
    TypeError 
    RangeError
Existen algunos otros errores en JavaScript.
    AggregateError 
    Error 
    InternalError 
    URIError
*/

//  *   ReferenceError
console.log(username);
/*  la variable llamadausername no ha sido declarada, 
    la línea de código anterior dará como resultado la siguiente salida:
    Uncaught ReferenceError: username is not defined
*/

//  *   SyntaxError
var a "there's no assignment operator here";
/*  Cualquier tipo de código JavaScript no válido provocará un SyntaxError.
    La línea de código anterior arrojará el siguiente error:
    Uncaught SyntaxError: Unexpected string
    IMPORTANTE: SyntaxError no se puede atrapar utilizando el bloque try-catch.  
*/

//  *   TypeError
"hello".pop()
/*  Un TypeError se lanza cuando se intenta ejecutar un método 
    en un tipo de datos no soportado. Mostrará la siguiente salida:
    Uncaught TypeError: "hello".pop is not a function
*/

//  *   RangeError
//  Loas siguientes dos línea si se ejecutan:
(10).toString(2); // '1010' Convierte un número de Base 10 a Base 2.
(10).toString(8); // 12 Convierte un número base 10 a Base 8.

/*  Un RangeError se lanza cuando estamos dando un valor a una función, pero 
    ese valor está fuera del rango permitido de valores de entrada aceptables.
    si intento utilizar un sistema numérico inexistente, como un 
    imaginario Base100, ya que este sistema numérico efectivamente no existe 
    en JavaScript, obtendré el RangeError, porque un sistema Base100 
    inexistente está fuera delrango de los sistemas numéricos que están 
    disponibles para el método toString()
*/
(10).toString(100);
/*  La línea de código anterior arrojará el siguiente error:
    Uncaught RangeError: toString() radix argument must be between 2 and 36
*/
