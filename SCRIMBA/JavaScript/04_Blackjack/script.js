let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// 2. Almacene el párrafo de tarjetas en una variable llamada cardsEl
let cardsEl = document.getElementById("cards-el");

function startGame() {
  // 3. Representa los coches en la página usando este formato -> "Tarjetas: 10 4"
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  // Representa la suma en la página usando este formato -> "Suma: 14"
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
