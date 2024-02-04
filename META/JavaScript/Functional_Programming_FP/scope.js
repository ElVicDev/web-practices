//  *   SCOPE

var num1 = 10; // GLOBAL SCOPE

// LOCAL SCOPE
function score() {
  var num2 = 20;
  console.log(num2);
}
score();

// ----------------------------------------------
//  ALCANCE DE UNA FUNCION
/*  Si una variable se define dentro de una función
    se puede decir que tiene el ámbito (scope) de esa función.
    También conocido como ámbito local (Local Scope)
*/
var globalVar = "I'm in the global scope";

function scopeTest() {
  var localVar = "I'm scoped to the function";
  console.log(globalVar);
}
scopeTest();
