// * -------------------
// * The spread operator
// * -------------------

/*  El operador spread añade fácilmente uno o más 
    miembros a una matriz existente: */
let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "beetroot"];
console.log(veggies);

/*  Convertir una cadena en una matriz utilizando 
    el operador spread
    Dada una cadena, es fácil extenderla en elementos 
    separados de una matriz: */
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

/*  Copie un objeto o un array en otro distinto
    He aquí cómo copiar un objeto en otro completamente 
    distinto, utilizando el operador spread. */
const car1 = {
  speed: 200,
  color: "yellow",
};
const car2 = { ...car1 };

car1.speed = 201;

console.log(car1.speed, car2.speed);

/*  Puede copiar una matriz en una matriz completamente separada, 
    también utilizando el operador de dispersión, así: */
const fruits1 = ["apples", "pears"];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);
