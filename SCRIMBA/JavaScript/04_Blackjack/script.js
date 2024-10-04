// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard + 4;
// console.log(sum);
let hasBlackJack = false;
// 1. Crea una variable llamada isAlive y asígnale el valor verdadero
let isAlive = true;

// 2. Cambia su valor a falso en el bloque de código apropiado
if (sum < 21) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  hasBlackJack = true;
} else {
  console.log("You're out of the game! 😭");
  isAlive = false;
}

// CASH OUT!
//console.log(hasBlackJack);

// 3. Cierra la sesión para comprobar que lo estás haciendo correctamente.
// CASH OUT!
console.log(isAlive);
