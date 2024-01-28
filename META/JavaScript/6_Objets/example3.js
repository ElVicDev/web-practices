// notación de corchetes.

var house2 = {};
house2["rooms"] = 4;
house2["color"] = "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

// ---------------------------------------------------------------
//  Puedo generar el objeto vacio, luego agregar y/o actualizar

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

/*  En la notación de corchetes, se pueden añadir caracteres de espacio
    dentro de los nombres de las propiedades
*/
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 4}

/*  Puedo añadir números (como el tipo de datos cadena)
    como claves de propiedades.
    Sin embargo, se desaconseja hacer esto, debido a las razones obvias
    de que tener una clave de propiedad como una cadena de números
    no transmite realmente mucha información útil.
*/
car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 4}

// ---------------------------------------------------------------
//  Se pueden evaluar expresiones

var arrOfKeys = ["speed", "altitude", "color"];
var drone = {
  speed: 100,
  altitude: 200,
  color: "red",
};
for (var i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]]);
}
