// * -----------------
// * The rest operator
// * -----------------

// Utilizaremos el operador rest como una técnica de desestructuración

const top7 = [
  "The Colosseum",
  "The Roman Forum",
  "The Vatican",
  "Trevi Fountain",
  "The Pantheon",
  "Pizza Venezia",
  "The Palatine Hill",
];

const [] = top7;

const [first, second, third, ...secondVisit] = top7;

console.log(secondVisit);

console.log(top7[0]);

console.log(third);
