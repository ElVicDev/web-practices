// * ----------------------------------------
// * Cerrar sesión en elementos de una matriz
// * ----------------------------------------

let myCourses = [
  "Learn CSS Animations",
  "UI Design Fundamentals",
  "Intro to Clean Code",
];

// Crea una función que toma un único parámetro, una matriz,
// y registra todos los elementos de la matriz en la consola.
// Llama a la función mientras pasas myCourses como argumento

function logItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

logItems(myCourses);
