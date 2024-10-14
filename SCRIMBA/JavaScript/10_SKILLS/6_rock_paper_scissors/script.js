let hands = ["rock", "paper", "scissor"];

// Crea una función que devuelve un elemento aleatorio de la matriz
function getHand() {
  let randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex];
}

console.log(getHand());
