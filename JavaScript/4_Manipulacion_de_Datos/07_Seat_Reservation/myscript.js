const rows = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
];

let html = "";
let counter = 1;

rows.forEach(function (row) {
  // Recorre cada asiento de la sección.
  html += `<div class="label">${row}</div>`;

  for (let i = 0; i < 3; i++) {
    html += `<div id="4{row + counter}">${counter}</div>`;
    counter++;
  }
});

document.getElementById("left").innerHTML = html;
