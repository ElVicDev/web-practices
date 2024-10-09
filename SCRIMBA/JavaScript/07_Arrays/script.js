// *** Matrices: listas ordenadas de elementos

let featuredPosts = [
  "Check out my Netflix clone",
  "Here's the code for my project",
  "I've just relaunched my portfolio",
];

// Crea una matriz que incluya tu experiencia.
// Los elementos de la matriz deben ser cadenas.
let experience = [
  "Full Stack",
  "Developer Apps",
  "Freelance",
  "SW/App/Cloud/Tech Support Sr. Engineer",
  "Business Critical Solution Engineer",
];
console.log(experience);

//  Hacer que aparezca lo siguiente en la consola:
//  Full Stack
console.log(experience[0]);
//  SW/App/Cloud/Tech Support Sr. Engineer
console.log(experience[3]);
//  El número de elementos que tiene la matriz llamada experience:
console.log(experience.length);

//  *** Matriz: lista ordenada de elementos: tipo de datos complejo/compuesto
// Crea una matriz que te describa. Usa los tres tipos de datos primitivos que has aprendido
// Debe contener tu nombre (cadena), tu edad (número) y si te gusta la pizza (booleano)
let info = ["ElVicDev", 8, true];
console.log(info);

//  *** Agregar y eliminar elementos de matrices
let cards = [7, 4];
cards.push(6);
console.log(cards);

// Envía newMessage a la matriz de mensajes y luego cierra la sesión de la matriz.
let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
];
console.log(messages);
let newMessage = "Same here!";
messages.push(newMessage);
console.log(messages);

// ¿Cómo se puede eliminar el último elemento de una matriz? ¡Intenta buscarlo en Google!
messages.pop();
console.log(messages);
