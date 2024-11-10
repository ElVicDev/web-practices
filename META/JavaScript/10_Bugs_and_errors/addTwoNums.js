//  *   Prevención de errores

/*  INSTRUCCIONES
    1.- Codifique una declaración de función llamada addTwoNums.
    2.- Invocar la función addTwoNums con un número y una cadena de caracteres.
    3.- Actualice la función addTwoNums con un bloque try...catch.
    4.- Si los argumentos pasados no son números, lance un error.
    5.- Actualice el bloque catch.
    6.- Invocar la función addTwoNums.
    7.- Añada otro registro en consola bajo la invocación de la función addTwoNums
*/

function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("the first argument is not a number");
    } else if (typeof b != "number") {
      throw new ReferenceError("the second argument is not a number");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log("Error!", err);
  }
}
addTwoNums(5, "5");
console.log("It still works");
