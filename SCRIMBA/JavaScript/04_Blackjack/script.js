let firstCard = 10;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
console.log(messageEl);

// 1. Almacene el párrafo message-el en una variable llamada messageEl

function startGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  // 2. Muestra el mensaje en messageEl usando messageEl.textContent
  messageEl.textContent = message;
}
