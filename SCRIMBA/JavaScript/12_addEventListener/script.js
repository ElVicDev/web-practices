// 1. Toma el cuadro del DOM y almacénalo en una variable
// 2. Agrega un detector de eventos de clic al cuadro
// 3. Cierra la sesión y escribe "¡Quiero abrir el cuadro!" cuando se haga clic en él

let box = document.getElementById("box");

box.addEventListener("click", function () {
  console.log("I want to open the box!");
});
