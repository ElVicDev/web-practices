// ¡Comprueba si la persona es elegible para recibir una tarjeta de cumpleaños del Rey! (100)

let age = 100;

// if less than 100    -> "No elegible."
if (age < 100) {
  console.log("No elegible. 😭");
}
// else if exactly 100 -> "¡Aquí está tu tarjeta de cumpleaños del Rey!"
else if (age === 100) {
  console.log("¡Aquí está tu tarjeta de cumpleaños del Rey! 🥳");
}
// else -> "No es elegible, ya tienes uno."
else {
  console.log("No es elegible, ya tienes uno. 😭");
}
