// * -----------------------------------
// * addEventListener y objeto en matriz
// * -----------------------------------

let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];

// Obtener el botón del DOM y almacenarlo en una variable
const janeBtn = document.getElementById("jane-btn");
const janeScore = document.getElementById("jane-score");

// Usar addEventListener() para escuchar los clics en el botón
janeBtn.addEventListener("click", function () {
  console.log(data[0].score);
  janeScore.innerHTML = data[0].score;
});
// Registrar la puntuación de Jane cuando se hace clic en el botón (a través de datos)
