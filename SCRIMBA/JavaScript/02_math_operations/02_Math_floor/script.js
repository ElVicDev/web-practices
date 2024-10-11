let flooredNumber = Math.floor(3.45632);

console.log(flooredNumber);

/* 
What does Math.floor() do to positive numbers?
Your answer: Elimina los decimales
*/

// * Usando Math.random() y Math.floor() para crear un dado
let randomNumber = Math.floor(Math.random() * 6);

console.log(randomNumber);

/* 
Write down all the possible values randomNumber can hold now!
0, 1, 2, 3, 4, 5
*/

// * Completando nuestra función de dados
// Crea una función, rollDice(), que devuelva un número aleatorio entre 1 y 6
function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

console.log(rollDice());
