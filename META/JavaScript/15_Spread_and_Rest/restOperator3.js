// * -----------------
// * The rest operator
// * -----------------

// El operador rest es útil en funciones
// Puedo usar un parámetro rest para multiplicar valores
/* Puedo utilizar los métodos de matriz en los elementos
comprados usando el método map. */

function addTaxToPrices(taxRate, ...itemsBought) {
  return itemsBought.map((item) => taxRate * item);
}

let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);

console.log(shoppingCart); // [50.6, 97.9, 38.5, 86.9]

// * El parámetro rest debe ser el último en la definición de una función.
// * Añadir cualquier otro parametro después del operador rest
// * dará lugar a un error.
