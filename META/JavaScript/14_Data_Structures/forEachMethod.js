// * --------------------
// * The forEach() method
// * --------------------

const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

// * ---------------------------------------------------

/*  Muy a menudo, la función que el métodoforEach() 
    necesita utilizar se pasa directamente en la llamada 
    al método, como en este caso: */

const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});

/*  Esto hace que el código sea más compacto, pero quizás
    algo más difícil de leer. Para aumentar la legibilidad,
    a veces se utilizan funciones de flecha. */
