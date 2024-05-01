(function () {
  "use strict";

  // Agregar variables para elementos DOM
  const startGame = document.getElementById("startgame");
  const gameControl = document.getElementById("gamecontrol");
  const game = document.getElementById("game");
  const score = document.getElementById("score");
  const actionArea = document.getElementById("actions");

  // Agregar un objeto para realizar el seguimiento de los datos del juego.
  const gameData = {
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
    //console.log(gameData.index);
    //console.log("Set up the turn!");
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
      //console.log("Roll the dice!");
      throwDice();
    });
  }

  // Crear la función tirar los dados.
  function throwDice() {
    actionArea.innerHTML = "";
    gameData.roll1 = Math.floor(Math.random() * 6) + 1;
    gameData.roll2 = Math.floor(Math.random() * 6) + 1;
    game.innerHTML = `<p>Roll the dice for the ${
      gameData.players[gameData.index]
    }</p>`;
    game.innerHTML += `<img src="${
      gameData.dice[gameData.roll1 - 1]
    }" alt="die">`;
    game.innerHTML += `<img src="${
      gameData.dice[gameData.roll2 - 1]
    }" alt="die">`;
    gameData.rollSum = gameData.roll1 + gameData.roll2;
    // console.log(gameData.rollSum);

    /*Agregar 3 declaraciones de selección a la función throwDice(). 
    Se utilizarán para gestionar lo que suceda en el juego, 
    dependiendo de lo que salga en los dados. */

    /*Declaracion de selección ¡Ojos de serpiente!. 
    Esto sucede cuando la suma de los dos dados es 2. */
    if (gameData.rollSum === 2) {
      // console.log("Snake eyes!");
      game.innerHTML += `<p>Oh! snap! Snake eyes!</p>`;
      gameData.score[gameData.index] = 0;
      gameData.index ? (gameData.index = 0) : (gameData.index = 1);
      showCurrentScore();
      // Muestra la puntuación actual.
      setTimeout(setUpTurn, 2000);
    } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
      // console.log("One of the two dice was a 1");
      /*Si sacó un 1 el operador ternario cambia de jugador, 
    luego coloca el mensaje en el área de juego y configura el siguiente turno 
    (después de esperar dos segundos). */
      gameData.index ? (gameData.index = 0) : (gameData.index = 1);
      game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${
        gameData.players[gameData.index]
      }</p>`;
      setTimeout(setUpTurn, 2000);
      // Aquí está la declaración else que se ejecuta si no se obtuvo ningún "1".
    } else {
      // console.log("The game proceeds");
      gameData.score[gameData.index] =
        gameData.score[gameData.index] + gameData.rollSum;
      actionArea.innerHTML = `<button id="rollagain">Roll again</button> 
      or <button id="pass">Pass</button>`;

      document
        .getElementById("rollagain")
        .addEventListener("click", function () {
          throwDice();
        });
      document.getElementById("pass").addEventListener("click", function () {
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        setUpTurn();
      });
      checkWinningCondition();
    }
  }

  /*Crear una función para comprobar si el jugador ha ganado. 
  Si eso es cierto, establecer un mensaje con la puntuación final, 
  borrar el área de acción del DOM y cambiar el texto dentro del 
  botón de salir a "Iniciar un nuevo juego". */
  function checkWinningCondition() {
    // Condición ganadora
    if (gameData.score[gameData.index] > gameData.gameEnd) {
      score.innerHTML = `<h2>${gameData.players[gameData.index]}
    wins with ${gameData.score[gameData.index]} points!</h2>`;

      actionArea.innerHTML = "";
      document.getElementById("quit").innerHTML = "Start a New Game?";
    } else {
      showCurrentScore();
    }
  }

  function showCurrentScore() {
    // Mostrar la puntuación actual.
    score.innerHTML = `<p>The score for <strong>${gameData.players[0]} is 
  ${gameData.score[0]}</strong> and the score for <strong>${gameData.players[1]} is 
  ${gameData.score[1]}</strong></p>`;
  }
})();
