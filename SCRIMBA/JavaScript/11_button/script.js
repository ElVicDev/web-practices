let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// * ----------------------
// * Tu primer localStorage
// * ----------------------
// 1. Guarda un par clave-valor en localStorage
// 2. Actualiza la página. Obtén el valor y regístralo en la consola
// 3. Limpia localStorage

// SUGERENCIAS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PD: tanto la clave como el valor deben ser cadenas

// localStorage.setItem("repository", "https://www.elvicdev.com/");
// let elvicdev = localStorage.getItem("repository");
// console.log(elvicdev);
// localStorage.clear();

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  // Llamar a la función renderLeads()
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // Envuelva el encabezado en una etiqueta de ancla (<a>) dentro de <li>
    // ¿Puede hacer que el enlace se abra en una nueva pestaña?
    /* listItems +=
      "<li><a href='" +
      myLeads[i] +
      "' + target='_blank' + rel='noopener noreferrer'>" +
      myLeads[i] +
      "</a></li>"; */
    // * ----------------
    // * Template strings
    // * ----------------
    listItems += `
      <li>
        <a href='${myLeads[i]}' target='_blank' rel='noopener noreferrer'>
          ${myLeads[i]}
        </a>
      </li>
    `;
  }
  ulEl.innerHTML = listItems;
}
