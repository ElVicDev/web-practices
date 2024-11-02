// Función sin usar parámetros.
/* const welcomeEl = document.getElementById("welcome-el");

function greetUser() {
  welcomeEl.textContent = "Welcome back, ElVicDev 👋";
}
greetUser(); */

// * --------------------------------------
// * Escribe tu primer parámetro de función
// * --------------------------------------

// const welcomeEl = document.getElementById("welcome-el");

// EJEMPLO 1 .Sustituyendo el nombre.
/* function greetUser(name) {
  welcomeEl.textContent = "Welcome back, " + name + " 👋";
}
greetUser("ElVicDev"); */

// EJEMPLO 2. Sustituyendo el saludo.
/* function greetUser(gretting) {
  welcomeEl.textContent = gretting + ", ElVicDev 👋";
}
greetUser("Bye"); */

// * ----------------------------------
// * Funciones con múltiples parámetros
// * ----------------------------------
const welcomeEl = document.getElementById("welcome-el");

// ¡Añade la posibilidad de elegir el emoji también!
function greetUser(greeting, name, emoji) {
  // Reescribe la expresión usando literales de plantilla
  // welcomeEl.textContent = greeting + ", " + name + " 👋"
  welcomeEl.textContent = `${greeting}, ${name} ${emoji}`;
}

greetUser("Bye", "ElVicDev", "👋");

// * ---------------------------------------------
// * NOTA:
// * Para seleccionar emojis en Windows presionar
// *            WINDOWS + .
// * Para seleccionar emojis en Mac presionar
// *            CTRL + CMD + SPACE
// * ---------------------------------------------
