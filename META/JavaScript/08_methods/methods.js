//  * Métodos de objeto

var car = {};
car.color = "red"; // Añadimos un par clave-valor conocido como propiedad
//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function () {
  console.log("engine running");
};
//  * Si la función es una propiedad de un objeto, entonces se denomina método.
/*  Se trata de una función a la que sólo se puede acceder a través del objeto 
    JavaScript del que es miembro. Por ejemplo, al método log, que pertenece al 
    objeto consola, sólo se puede acceder a través del objeto consola.
*/

// ---------------------------------------------------------------------

// * Example of adding properties and methods to an object
//  Crearé un objeto utilizando algo conocido como función constructora.
var car = {}; // Creo un objeto vacio llamado car
car.mileage = 98765;
car.color = "red"; // Añado dos propiedades a mi objeto
console.log(car);
// Agrego el código de mi función
car.turnTheKey = function () {
  console.log("The engine is running");
};
//  Agrego otro método al objeto car y lo asigno a una función
car.lightsOn = function () {
  console.log("The lights are on.");
};
//  He añadido cuatro propiedades a mi objeto. Y dos de ellas son métodos.
console.log(car);
/*  Invoco al método turnTheKey.
    Sólo se puede acceder a este método a través del objeto car
    Para ejecutarlo, necesito añadir un paréntesis de apertura y otro de cierre.
*/
car.turnTheKey();
//  Puedo pobar el segúndo método enviándolo a la consola
car.lightsOn();
/*  Es importante recordar que cuando el motor JavaScript ejecuta esta línea 
    de código, localiza el objeto car en su memoria. Luego, encuentra el 
    método lightsOn en el objeto car. Lee la declaración de la función que 
    está guardada en esta propiedad y la ejecuta, línea por línea.
*/
