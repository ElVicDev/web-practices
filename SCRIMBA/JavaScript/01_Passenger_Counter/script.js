let count = 0;
// 1. Tome el párrafo save-el y almacénelo en una variable llamada saveEl
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
  // Cambia esto para utilizar la técnica más igual que has aprendido.
  // count = count + 1
  count += 1;
  countEl.textContent = count;
}

// Crea una función, save(), que registra el recuento cuando se la llama
function save() {
  // 2. Crea una variable que contenga tanto el recuento como el separador de guiones, es decir, "12 - "
  // 3. Representa la variable en saveEl usando innerText
  // Nota: Asegúrate de no eliminar el contenido existente del párrafo
  let countStr = count + " - ";
  saveEl.innerText += countStr;
  // countEl.textContent = 0;
  // count = 0;
  // console.log(count)
}

console.log("Let's count people on the subway!");
