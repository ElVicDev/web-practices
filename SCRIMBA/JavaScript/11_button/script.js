let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// Obtener los clientes potenciales del almacenamiento local - PS: JSON.parse()
// Almacenarlos en una variable, leadsFromLocalStorage
// Cerrar sesión en la variable
localStorage.clear();
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

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
