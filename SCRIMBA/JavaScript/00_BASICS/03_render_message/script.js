// * Render a welcome message

// Toma el párrafo welcome-el y almacénalo en una variable llamada welcomeEl
let welcomeEl = document.getElementById("welcome-el");

// Crea dos variables (nombre y saludo) que contengan tu nombre
// y el saludo que queremos mostrar en la página
let name = "ElVicDev";
let greeting = "Bienvenido ";

// Muestra el mensaje de bienvenida usando welcomeEl.innerText
welcomeEl.innerText = greeting + name;
