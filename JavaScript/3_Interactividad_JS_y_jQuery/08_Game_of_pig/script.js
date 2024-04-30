// Agregar variables para elementos DOM
var startGame = document.getElementById("startgame");
var gameControl = document.getElementById("gamecontrol");
var game = document.getElementById("game");
var score = document.getElementById("score");
var actionArea = document.getElementById("actions");

// Agregar un objeto para realizar el seguimiento de los datos del juego.
var gameData = {
  dice: [
    "1die.jpg",
    "2die.jpg",
    "3die.jpg",
    "4die.jpg",
    "5die.jpg",
    "6die.jpg",
  ],
  players: ["player 1", "player 2"],
  score: [0, 0],
  roll1: 0,
  roll2: 0,
  rollSum: 0,
  index: 0,
  gameEnd: 29,
};

// Agregar la función iniciar el juego con un controlador de click
startGame.addEventListener("click", function () {
  gameData.index = Math.round(Math.random());
  gameControl.innerHTML = `<h2>The game has started</h2>`;
  gameControl.innerHTML += `<button id="quit">Wanna Quit?</button>`;

  document.getElementById("quit").addEventListener("click", function () {
    location.reload();
  });
  console.log(gameData.index);
  console.log("Set up the turn!");
  setUpTurn();
});

/* Agregar la función setUpTurn() y cambiar el archivo console.log en 
    la función startGame para llamar a esta función. */
function setUpTurn() {
  game.innerHTML = `<p>Roll the dice for the ${
    gameData.players[gameData.index]
  }</p>`;
  actionArea.innerHTML = `<button id="roll">Roll the Dice!</button>`;
  document.getElementById("roll").addEventListener("click", function () {
    console.log("Roll the dice!");
  });
}
