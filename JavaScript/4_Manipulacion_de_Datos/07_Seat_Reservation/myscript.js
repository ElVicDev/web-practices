/* ESTE SCRIPT CREA LOS ASIENTOS IZQUIERDA, DERECHA Y CENTRAL, 
PERO SE PUEDE MEJORAR. SE REALIZARÁ UN ARCHIVO LLAMADO myscript2.js 
PARA DARLE CONTINUIDAD AL PROYECTO. */

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

/* * * * * * * * SECCION IZQUERDA * * * * * * * */
let html = "";
let counter = 1;

rows.forEach(function (row) {
  // Recorre cada asiento de la sección izquierda.
  html += `<div class="label">${row}</div>`;

  for (let i = 0; i < 3; i++) {
    html += `<div id="${row + counter}">${counter}</div>`;
    counter++;
  }
  counter = counter + 12;
});

document.getElementById("left").innerHTML = html;

/* * * * * * * * SECCION DERECHA * * * * * * * */
html = "";
counter = 1;

rows.forEach(function (row) {
  counter = counter + 12;

  for (let i = 0; i < 3; i++) {
    html += `<div id="${row + counter}">${counter}</div>`;
    counter++;
  }
  // Recorre cada asiento de la sección derecha.
  html += `<div class="label">${row}</div>`;
});

document.getElementById("right").innerHTML = html;

/* * * * * * * * SECCION CENTRAL * * * * * * * */
html = "";
counter = 1;

rows.forEach(function (row) {
  counter = counter + 3;

  for (let i = 0; i < 9; i++) {
    html += `<div id="${row + counter}">${counter}</div>`;
    counter++;
  }
  counter = counter + 3;
});

document.getElementById("middle").innerHTML = html;
