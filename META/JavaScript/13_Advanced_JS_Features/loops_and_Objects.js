//  ***     UN OBJETO NO ES ITERABLE      ***
/* Un bucle for of no puede funcionar sobre un objeto directamente */
/* const car = {
  speed: 100,
  color: "blue",
};

for (prop of car) {
  console.log(prop);
} */
/* Si ejecuto el programa hasta la línea anteriór me arrojará
el siguiente error: Uncaught TypeError: car is not iterable */

//  ***     LAS MATRICES SON ITERABLES      ***
// Ejemplo
const colors = ["red", "orange", "yellow"];
for (var color of colors) {
  console.log(color); // red orange yellow
}
