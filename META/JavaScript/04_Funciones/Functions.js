// Función sin parámetros

function addTwoNum() {
  var a = 10;
  var b = 20;
  var c = a + b;
  console.log(c);
}
addTwoNum();

/*  Para hacer la función más flexible
    podemos pasar parámetros
*/

function addTwoNums(a, b) {
  var c = a + b;
  console.log(c);
}
addTwoNums(2, 2); // Llamando a finción con argumentos
addTwoNums(4, 4);
