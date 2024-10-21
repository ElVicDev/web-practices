// * -----------------------------
// * Incrementing and decrementing
// * -----------------------------

let myPoints = 3;

// Cree dos funciones, add3Points() y remove1Point(), y haga que
// agreguen o eliminen puntos a/de la variable myPoints
function add3Points() {
  myPoints += 3;
}

function remove1Point() {
  myPoints -= 1;
}
// Llame a las funciones a las que la línea siguiente cierra la sesión 10
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints);
