// * -----------------
// * The rest operator
// * -----------------

// Utilizando rest operator, es fácil concatenar matrices:
const fruits = ["apple", "pear", "plum"];
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array

// También es fácil unir objetos:
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar); // {wings: 2, wheels: 4}
