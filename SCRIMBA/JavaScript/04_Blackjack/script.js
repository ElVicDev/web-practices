let firstCard = 10;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
// 1. Declara una variable llamada mensaje y asigna su valor a una cadena vacía.
let message = "";

// 2. Reasigna la variable mensaje a la cadena de la que estamos cerrando la sesión.
if (sum < 21) {
  message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳";
  hasBlackJack = true;
} else {
  message = "You're out of the game! 😭";
  isAlive = false;
}

// 3. Cierra la sesión para comprobar que lo estás haciendo correctamente.
console.log(message);
