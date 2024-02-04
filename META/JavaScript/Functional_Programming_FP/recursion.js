//  *   RECURSIÓN

function example1() {
  console.log("line one");
  console.log("line two");
  console.log("line three");
}
example1();

// ----------------------------------------------------------------------
//  Cuando una función se llama a si misma, se conoce como recursión.
let counter = 3;
function example2() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  example2();
}
example2();

//  Las funciones recursivas nos ayudan a evitar loops infinitos
