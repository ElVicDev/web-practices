import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://keep-calm-and-carry-on-a6534-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "products");

const productNameInputField = document.getElementById("product-name-input");
const productValueInputField = document.getElementById("product-value-input");
const submitButton = document.getElementById("submit-button");

onValue(referenceInDB, function (snapshot) {
  console.log(snapshot.val());
});

submitButton.addEventListener("click", function () {
  productNameInputField.value;
  push(referenceInDB, productNameInputField.value);
  productNameInputField.value = "";
});
