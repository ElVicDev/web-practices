let firstCard = 10;
let secondCard = 4;
// 1. Crea una nueva matriz - cards - que contenga firstCard y secondCard.
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// Almacene el párrafo de tarjetas en una variable llamada cardsEl
let cardsEl = document.getElementById("cards-el");

// Crea una nueva función llamada startGame() que llama a renderGame()
function startGame() {
  renderGame();
}

function renderGame() {
  // Renderizar firstCard y secondCard.
  cardsEl.textContent = "Cards: "; // + cards[0] + " " + cards[1];
  // Crea un bucle for que represente todas las tarjetas en lugar de solo dos
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  // Renderizar TODAS las cartas que tenemos.
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

// Crea una función newCard() que cierre la sesión "Drawing a new card from the deck!"
function newCard() {
  console.log("Drawing a new card from the deck!");
  // Crea una variable de carta y codifica su valor en un número (2-11)
  let card = 6;
  // Agrega la nueva carta a la variable suma
  sum += card;
  // Empuja la tarjeta a la matriz de tarjetas
  cards.push(card);
  console.log(cards);
  // Llama a startGame()
  renderGame();
}
