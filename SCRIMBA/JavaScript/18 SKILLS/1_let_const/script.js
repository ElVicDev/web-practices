// * -----------
// * let & const
// * -----------

// PREPARANDO EL ESCENARIO
const player = "Per";
const opponent = "Nick";
const game = "AmazingFighter";
let points = 0;
let hasWon = false;

// JUGANDO EL JUEGO
points += 100;
hasWon = true;

// ANUNCIO DEL GANADOR
if (hasWon) {
  console.log(
    // player + " got " + points + " points and won the " + game + " game!"
    `${player} got ${points} points and won the ${game} game!`
  );
} else {
  // console.log("The winner is " + opponent + "! " + player + " lost the game");
  console.log(`The winner is ${opponent}! ${player} lost the game`);
}

// Revise todas las variables y decida si deben ser let o const
// Cambie los registros de la consola para usar cadenas de plantilla
// en lugar de comillas dobles.
