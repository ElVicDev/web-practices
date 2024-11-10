//  ***     Herencia (inheritance)      ***

var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};

var eagle1 = Object.create(bird);
console.log("eagle1:", eagle1); // eagle1: {}
/*  Al ejecutar el codigo hasta la línea anterior se observa solo un
    objeto vacio registrado e la consola, pero como utilicé el objeto
    para crear y generar instancias del objeto eagle1, también tengo
    acceso a todas las propiedades del objeto bird.  */

console.log("eagle1 has wings:", eagle1.hasWings); // eagle1 has wings: true
console.log("eagle1 can fly:", eagle1.canFly); // eagle1 can fly: true
console.log("eagle1 has feathers:", eagle1.hasFeathers); // eagle1 has feathers: true

/*  Puedo construir tantos objetos como quiera y todos ellos tendrán 
    objetos bird como su prototipo. */
var eagle2 = Object.create(bird);
console.log("eagle2 has wings:", eagle2.hasWings); // eagle2 has wings: true

/*  Puedo añadir diferentes objetos con diferentes comportamientos. */
var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1:", penguin1); // penguin1: { canFly: false }
console.log("penguin1 has feathers:", penguin1.hasFeathers); // penguin1 has feathers: true
console.log("penguin1 can fly:", penguin1.canFly); // penguin1 can fly: false

//  * ------------------------------------------------------ *
//  *****   NOTA  *****
//  * Probablemente sea mejor utilizar la sintaxis CLASS
//  * para los objetos mas complejos y la herencia.
//  * Tiene sentido usar clases ya que mejoran la experiencia
//  * del desarrollador en escenarios más complejos.
//  * ------------------------------------------------------ *
