// * -------------------
// * The spread operator
// * -------------------

// EXAMPLE 2

let top3 = ["The Colosseum", "Trevi Fountain", "The Vatican City"];
function showItinerary(place1, place2, place3) {
  console.log("Visit " + place1);
  console.log("Then visit " + place2);
  console.log("Finish with a visit to " + place3);
}
showItinerary(top3[0], top3[1], top3[2]);

// Aunque el código anterior funciona no es práctico
// El operador spread simplifica las cosas

showItinerary(...top3);

// * El operador spread puede repartir los elementos de una matriz y unir objetos.
// * El operador spread se caracteriza por tener 3 puntos.
