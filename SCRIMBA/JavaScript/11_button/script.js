let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
// Toma la lista desordenada y almacénala en una variable constante llamada ulEl
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  // 2. Llamar a la función renderLeads()
  inputEl.value = "";
  renderLeads();
});

/* // Representar los clientes potenciales en la lista desordenada usando ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
  // console.log(myLeads[i]);
  // ulEl.textContent += myLeads[i] + " ";
  // How to render <li> elements with innerHTML
  // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
  // create element
  // set text content
  // append to ul
  const li = document.createElement("li");
  li.textContent = myLeads[i];
  ulEl.append(li);
} */

/* // 1. Cree una variable, listItems, para almacenar todo el HTML de los elementos de la lista
// Asígnele una cadena vacía para comenzar
let listItems = "";
for (let i = 0; i < myLeads.length; i++) {
  // 2. Agregue el elemento a la variable listItems en lugar de ulEl.innerHTML
  listItems += "<li>" + myLeads[i] + "</li>";
}
// 3. Representa los elementos de la lista dentro de la lista desordenada usando ulEl.innerHTML
ulEl.innerHTML = listItems; */

// 1. Envuelva el código a continuación en una función renderLeads()
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
  }
  ulEl.innerHTML = listItems;
}
