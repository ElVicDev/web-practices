// * ---------------------------
// * Escribe tu primer innerHTML
// * ---------------------------

// Utilice .innerHTML para mostrar un botón ¡Comprar! dentro del contenedor div
const container = document.getElementById("container");

container.innerHTML = "<button onclick='buy()'>Buy!</button>";

// Al hacer clic, se muestra un párrafo debajo del botón (en el contenedor)
// que dice "¡Gracias por comprar!"
function buy() {
  container.innerHTML += "<p>Thank you for buying!</p>";
}
