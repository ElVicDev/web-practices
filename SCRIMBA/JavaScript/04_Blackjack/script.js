// Utilice getRandomCard() para establecer los valores de firstCard y secondCard
let firstCard = getRandomCard();
let secondCard = getRandomCard();
// Crea una nueva matriz - cards - que contenga firstCard y secondCard.
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// Almacene el párrafo de tarjetas en una variable llamada cardsEl
let cardsEl = document.getElementById("cards-el");

// Haga que esta función devuelva un número aleatorio entre 1 y 13
function getRandomCard() {
  // if 1     -> return 11
  // if 11-13 -> return 10
  let randomNumer = Math.floor(Math.random() * 13) + 1;
  if (randomNumer > 10) {
    return 10;
  } else if (randomNumer === 1) {
    return 11;
  } else {
    return randomNumer;
  }
}

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
  // Utilice getRandomCard() para establecer el valor de la tarjeta
  let card = getRandomCard();
  // Agrega la nueva carta a la variable suma
  sum += card;
  // Empuja la tarjeta a la matriz de tarjetas
  cards.push(card);
  console.log(cards);
  // Llama a startGame()
  renderGame();
}
