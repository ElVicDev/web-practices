// * ------------------
// * El método filter()
// * ------------------

/*  Filtra sus arrays basándoseen una prueba específica. 
    Se devuelven los elementos del array que superan la 
    prueba. */

const nums = [0, 10, 20, 30, 40, 50];
const result = nums.filter(function (num) {
  return num > 20;
});
console.log(result);
