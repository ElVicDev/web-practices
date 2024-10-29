let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

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
