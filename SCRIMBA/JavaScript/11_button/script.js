// Crea dos variables:
// myLeads -> debe asignarse a una matriz vacía
// inputEl -> debe asignarse al campo de entrada de texto

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

// Inserte el valor "www.awesomelead.com" en myArray cuando se haga clic en el botón de entrada
inputBtn.addEventListener("click", function () {
  //console.log("Button clicked from addEventListener");
  myLeads.push("www.awesomelead.com");
  console.log(myLeads);
});
