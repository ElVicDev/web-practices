let player1Time = 102;
let player2Time = 107;

// *NOTA: cmd+d - ctrl+d - Selecciona varias lineas para poderlas modificar al mismo tiempo

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Escribe una función que devuelva el tiempo total de la carrera
// Llama/invoca la función y almacena el valor devuelto en una nueva variable
// Finalmente, registra la variable
function getTotalRaceTime() {
  return player1Time + player2Time;
}

let totalTime = getTotalRaceTime();

console.log(totalTime);
