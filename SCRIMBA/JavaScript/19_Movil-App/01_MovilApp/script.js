import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://leads-tracker-app-4a42d-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Desafío: crear una constante llamada 'referenceInDB' y usar la
// función ref para crear una referencia llamada 'leads' en la base de datos
const referenceInDB = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

// Desafío: Cerrar la sesión de una instantánea de su base de datos
// cuando se le agregue un nuevo valor
onValue(referenceInDB, function (snapshot) {
  console.log(snapshot.val());
});

deleteBtn.addEventListener("dblclick", function () {});

inputBtn.addEventListener("click", function () {
  console.log(inputEl.value);
  // Desafío: Importar la función 'push' y modificar la línea anterior
  // para enviar inputEl.value a referenceInDB en la base de datos
  push(referenceInDB, inputEl.value);
  inputEl.value = "";
});
