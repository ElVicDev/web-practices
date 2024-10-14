let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  // Desafío:
  // Cuando el usuario haga clic en el botón "Seleccionar luchadores", elija dos luchadores emoji al azar
  // y muéstrelos como, por ejemplo, "🦀 vs 🐢" en el "escenario" <div>.
  let randomIndexOne = Math.floor(Math.random() * fighters.length);
  let randomIndexTwo = Math.floor(Math.random() * fighters.length);
  stageEl.textContent =
    fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo];
});
