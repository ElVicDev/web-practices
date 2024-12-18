// * Iterar sobre una matriz
/*  Cree una función llamada `logDairy`. 
    Dentro de ella, registre en la consola cada uno de los 
    elementos de la matriz de productos lácteos, 
    utilizando el bucle for...of.
    Después de crear esta función, llámela como `logDairy()` 
    para ver el resultado en la consola.
 */

var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (var items of dairy) {
    console.log(items);
  }
}
logDairy();

// * ---------------------------------------------
/*  Cree una función llamada `birdCan`, dentro de ella, 
    recorra las propiedades del objeto bird y registre en la 
    consola cada una de ellas, usando el bucle for...of. 
    Finalmente, llame a la función como `birdCan()` para ver 
    el resultado en la consola.
    Debe registrar en la consola tanto la clave como 
    el valor de cada una de las propiedades del objeto bird.
 */
const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (var skills of Object.keys(bird)) {
    console.log(skills, ": ", bird[skills]);
  }
}
birdCan();

// * ---------------------------------------------
/*  Usando el mismo código de inicio que en la tarea 2, 
    cree una función llamada `animalCan` y dentro de ella, 
    recorra en bucle todas las propiedades tanto del objeto 
    bird como de su prototipo (el objeto animal) usando el 
    bucle for...in. Finalmente, llame a la función 
    como `animalCan()` para ver el resultado en la consola.*/
function animalCan() {
  for (var skills of Object.keys(bird)) {
    console.log(skills, ": ", bird[skills]);
  }
  for (var skills of Object.keys(animal)) {
    console.log(skills, ": ", animal[skills]);
  }
}
animalCan();
