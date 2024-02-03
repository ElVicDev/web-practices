//  *   MATRICES

//  Hay dos formas de crear matrices
var colors = new Array("red", "green", "blue");
var colors = ["red", "green", "blue"];

console.log(colors[0]); // red
console.log(colors.length); // 3

// --------------------------------------------

var vehicles = [
  "Ford",
  ["Fiesta", "Taurus", "Explorer"],
  "Honda",
  ["Pilot", "Civic", "Accord"],
  "Toyota",
  ["Corolla", "Camry", "Prius"],
];
console.log(vehicles[0]); // Ford
console.log(vehicles[1]); //[ 'Fiesta', 'Taurus', 'Explorer' ]
console.log(vehicles[1][2]); // Explorer
console.log(vehicles[2]); // Honda
console.log(vehicles[3]); // [ 'Pilot', 'Civic', 'Accord' ]
console.log(vehicles[3][1]); // Civic
console.log(vehicles[4]); // Toyota
console.log(vehicles[5]); // [ 'Corolla', 'Camry', 'Prius' ]
console.log(vehicles[5][0]); // Corolla
console.log(vehicles[5][1][2]); // m
console.log(vehicles[5][2][4]); // s
console.log(vehicles[1][0]); // Fiesta

// --------------------------------------------

var animals = ["cat", "dog", "chicken"];
console.log(animals); // [ 'cat', 'dog', 'chicken' ]

animals.push("llama"); // PUSH añade un elemento a mi matriz
console.log(animals); // [ 'cat', 'dog', 'chicken', 'llama' ]
console.log(animals.length); // 4
console.log(animals[3]); // llama

animals.splice(1, 1); // SPLICE extraé un elemento de mi matriz (dog)
console.log(animals); // [ 'cat', 'chicken', 'llama' ]
console.log(animals.length); // 3

animals.push("dog"); // Agrego nuevamente a 'dog' con PUSH
console.log(animals); // [ 'cat', 'chicken', 'llama', 'dog' ]
console.log(animals.length); // 4

animals.sort(); // SORT ordena alfabeticamente los elementos de mi matriz
console.log(animals); // [ 'cat', 'chicken', 'dog', 'llama' ]

// Muestra el último elemento de mi matriz
console.log(animals[animals.length - 1]);
