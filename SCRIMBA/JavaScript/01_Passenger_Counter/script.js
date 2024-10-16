let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}

// Crea una función, save(), que registra el recuento cuando se la llama
function save() {
  // console.log(count)
  let countStr = count + " - ";
  saveEl.textContenttStr;
  countEl.textContent = 0;
  count = 0;
}

console.log("Let's count people on the subway!");
