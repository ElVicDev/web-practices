var user = {}; //create an object
console.log(user); // Inn this case is empty

// ----------------------------------------------------

//creating an object with properties and their values
var assistantManager = {
  rangeTilesPerTurn: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: "young and ambitious",
  greeting: "Let's make some money",
};
console.log(assistantManager);

// ----------------------------------------------------

var table = {
  legs: 3,
  color: "brown",
  priceUSD: 100,
};
console.log(table); //display the object in the developer console
console.log(table.color); // 'brown'

// ----------------------------------------------------

var house = {
  rooms: 3,
  color: "brown",
  priceUSD: 10000,
};
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10; // Puedo añadir una nueva propiedad window con valor 10
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}
house.windows = 11; // Puedo actualizar la propiedad window a 11
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}

// ----------------------------------------------------

/*  Puedo generar un objeto vacío en una variable,
    luego utilizar la notación de puntos para declarar 
    nuevas propiedades sobre la marcha, y utilizar el operador 
    de asignación para añadir valores a esas propiedades.
*/

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
console.log(house2); //{ rooms: 4, color: 'pink', priceUSD: 12345 }
