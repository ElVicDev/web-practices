// * ---------------------
// * The Map() constructor
// * ---------------------

// Para crear un nuevo Mapa, puede utilizar el constructorMap:

new Map();

/*  Un mapa puede parecer muy similar a un objeto en JS.
    Sin embargo, no tiene herencia.
    No tiene prototipos.
    Esto lo hace útil como almacenamiento de datos.
    Por ejemplo: */

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

// Para obtener un valor específico, debe utilizar
// el métodoget(). Por ejemplo:
console.log(bestBoxers.get(1)); // 'The Champion'
