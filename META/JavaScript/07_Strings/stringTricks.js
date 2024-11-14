//  String tricks

var greet = "Hello, ";
var place = "World";

/*  la propiedad length
    Para obtener la longitud de una cadena
*/
console.log(greet.length); // 7

/*  El método charAt()
    Para leer cada carácter individual en un índice específico
    de una cadena, empezando por cero
*/
console.log(greet.charAt(0)); // 'H'

/*  El método concat()
    Para unir dos cadenas
*/
console.log("Wo".concat("rl").concat("d")); // 'World'

/*  El indexOf
    Devuelve la ubicación de la primera posición que coincide con un carácter
*/
console.log("ho-ho-ho".indexOf("h")); // 0
console.log("ho-ho-ho".indexOf("o")); // 1
console.log("ho-ho-ho".indexOf("-")); // 2

/*  El lastIndexOf
    Encuentra la última coincidencia, por lo demás funciona igual que elindexOf.
*/
console.log("ho-ho-ho".lastIndexOf("h")); // 6
console.log("ho-ho-ho".lastIndexOf("o")); // 7
console.log("ho-ho-ho".lastIndexOf("-")); // 5

/*  El método split()
    Trocea la cadena en una matriz de subcadenas
*/
console.log("ho-ho-ho".split("-")); // ['ho', 'ho', 'ho']

/*  El método toUpperCase()
    Convierte una cadena en mayúsculas
*/
console.log(greet.toUpperCase()); // "HELLO, "

/*  El método toLowerCase()
    Convierte una cadena en minúsculas
*/
console.log(greet.toLowerCase()); // "hello, "
