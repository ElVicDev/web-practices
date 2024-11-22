// * ---------------------
// * The set() constructor
// * ---------------------

// Un conjunto es una colección de valores únicos.
// Para construir un nuevo conjunto, puede utilizar
// el constructor Set:
new Set();

/*  El constructor Set puede, por ejemplo, aceptar un array.
    Esto significa que podemos utilizarlo para filtrar 
    rápidamente un array en busca de miembros únicos */

const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
