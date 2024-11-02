// Función sin usar parámetros.
/* const welcomeEl = document.getElementById("welcome-el");

function greetUser() {
  welcomeEl.textContent = "Welcome back, ElVicDev 👋";
}
greetUser(); */

// * --------------------------------------
// * Escribe tu primer parámetro de función
// * --------------------------------------

const welcomeEl = document.getElementById("welcome-el");

// EJEMPLO 1 .Sustituyendo el nombre.
/* function greetUser(name) {
  welcomeEl.textContent = "Welcome back, " + name + " 👋";
}
greetUser("ElVicDev"); */

// EJEMPLO 2. Sustituyendo el saludo.
function greetUser(gretting) {
  welcomeEl.textContent = gretting + ", ElVicDev 👋";
}
greetUser("Bye");
