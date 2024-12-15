//  ***     El método Object.keys()      ***

// El método Object.keys() recibe un objeto como parámetro.
const car2 = {
  speed: 200,
  color: "red",
};
console.log(Object.keys(car2)); // ['speed','color']

//  ***     El método Object.values()      ***

const car3 = {
  speed: 300,
  color: "yellow",
};
console.log(Object.values(car3)); // [300, 'yellow']

//  ***     El método Object.entries()      ***

// Object.entries() devuelve una matriz con las claves y los valores.
const car4 = {
  speed: 400,
  color: "magenta",
};
console.log(Object.entries(car4)); // [ ['speed', 400], ['color', 'magenta'] ]
