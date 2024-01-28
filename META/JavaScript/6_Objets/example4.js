// Las matrices son objetos

/*  Para añadir nuevos elementos a una matriz, 
    puedo utilizar el método push()
    */
var fruits = [];
fruits.push("apple"); // ['apple']
console.log(fruits);
fruits.push("pear"); // ['apple', 'pear']
console.log(fruits);

/*  Para eliminar el último elemento de una matriz, 
    puedo utilizar el método pop()
*/
fruits.pop();
console.log(fruits); // ['apple']

// ------------------------------------------------------
/*  Puedo construir una función que tome todos sus argumentos 
    y los introduzca en una matriz
*/
function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  console.log(arr);
}

//  Ahora puedo llamar a la función arrayBuilder()
arrayBuilder("apple", "pear", "plum"); // ['apple', 'pear', 'plum']

/*  Aún mejor, no tengo que registrar en la consola el array recién construido. 
    En su lugar, puedo devolverlo:
*/
function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}

/*  Además, puedo guardar esta llamada a la función en una variable. 
    Puedo ponerle cualquier nombre, pero esta vez utilizaré el nombre:
    simpleArr
*/
var simpleArr = arrayBuilder("apple", "pear", "plum");

// Y ahora puedo registrar en consola los valores almacenados en simpleArr:
console.log(simpleArr); // ['apple','pear','plum']
