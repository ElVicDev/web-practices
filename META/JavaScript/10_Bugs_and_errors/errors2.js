//  *   Valores indefinidos, nulos y vacíos

/*  Undefined, null and empty values
NULL - Intentional absence of any object value.
UNDEFINED - The undefined data type can only hold one value: undefined. 
EMPTY - This is a string without any characters inside.
*/

// -------------------------------------------------------
//  *   NULL
//  The next program works correctly. Busca la letra "a" en el string
var letters = "abc";
console.log(letters.match(/a/));
/*  Sabemos que la letra a se encuntra en el string y
    nos muestra la siguiente salida:
    [ 'a', index: 0, input: 'abc', groups: undefined ]
    Pero que pasa si solicitamos que busque un caracter 
    que no está en la cadena
*/
var letters = "abc";
console.log(letters.match(/d/));
//  Como no encuentra la letra "d" nos arroja en la salida NULL

// -------------------------------------------------------
//  *   UNDEFINED
//  La siguiente línea nos dara una salida undefined porque
//  No ha sido asignado un valor a la variable.
var noise;
console.log(noise);
/*  Aunque javaScript ejecuta el código, es altamente recomendado 
    asignar valores a las variables al declararlas.
    JavaScript brinda cierta flexibilidad, pero si intentas utilizar
    console.log con una variable que no se ha declarado en todo el código,
    la ejecución del código se detendrá y se generará un error de referencia:
    ReferenceError
*/
//  Otro ejemplo de UNDEFINED
var game = {
  score: 1000,
};
console.log(game.Score);
/*  El programa anterior nos arroja Undefined porque en nuestra variable la 
    propiedad la agregamos con minúscula y al querer mandarla a la consola lo 
    hicimos colocando la S en mayúscula, por lo que JavaScript no lo encuentra.
*/

// -------------------------------------------------------
//  *   EMPTY
/*  Es una cadena sin caracteres en su interior y está construida por 
    comillas simples o comillas dobles.
*/
var name1 = "";
console.log(name1);

//  var name2 = '';
