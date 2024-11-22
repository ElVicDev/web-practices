// * ------------
// * Objects
// * ------------

/*  El siguiente ejemplo demuestra cómo utilizar la 
    estructura de datos de objetos para completar una 
    tarea específica. Esta tarea consiste en convertir 
    un objeto en una matriz: */

const result = [];
const drone = {
  speed: 100,
  color: "yellow",
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});
console.log(result);

/*  Aunque esto es posible y funciona, tener que hacer algo
    así puede significar que no ha elegido la estructura de
    datos correcta con la que trabajar en su código.
    Por otro lado, a veces no puede elegir la estructura de
    datos con la que trabaja. Tal vez esos datos procedan 
    de un proveedor de datos externo y lo único que puede 
    hacer es codificar su programa para que los consuma.
    Aprenderá más sobre el intercambio de datos en la web 
    cuando conozca JSON (JavaScript Object Notation). */
