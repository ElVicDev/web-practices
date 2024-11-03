// * ----------------
// * Generar oración
// * ----------------

// generateSentence(desc, arr) toma dos parámetros: una descripción y una matriz.
// Debe devolver una cadena basada en la descripción y la matriz.

// Ejemplo 1: si pasas "los países más grandes" y ["China", "India", "EE. UU."],
// debe devolver la cadena: "Los 3 países más grandes son China, India y EE. UU."

// Ejemplo 2: si pasas "las mejores frutas" y ["manzanas", "plátanos"], debe devolver:
// "Las 2 mejores frutas son manzanas y plátanos"

// Usa un bucle for y una cadena de plantilla para resolver el desafío

function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `;
  const lastIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i === lastIndex) {
      baseString += arr[i];
    } else {
      baseString += arr[i] + ", ";
    }
  }
  return baseString;
}

const countries = generateSentence("largest countries", [
  "China",
  "India",
  "USA",
]);
const fruits = generateSentence("best fruits", ["Apples", "Bananas"]);

console.log(countries);
console.log(fruits);
