let myLeads = [
  "https://www.elvicdev.com",
  "www.epiclead.com",
  "www.greatlead.com",
];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
// 2. Toma la lista desordenada y almacénala en una variable constante llamada ulEl
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Cerrar sesión en los elementos de la matriz myLeads usando un bucle for
for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i]);
}
