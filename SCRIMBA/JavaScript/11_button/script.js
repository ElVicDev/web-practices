let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
// 1. Almacene el botón eliminar en una variable deleteBtn
const deleteBtn = document.getElementById("delete-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

// 2. Escucha los dobles clics en el botón de eliminar (¡búscalo en Google!)
// 3. Cuando hagas clic, borra localStorage, myLeads y el DOM
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  // Guarda la matriz myLeads en localStorage
  // PD: recuerda JSON.stringify()
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();

  // Para verificar que funciona:
  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
