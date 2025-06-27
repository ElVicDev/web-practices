/* Operadores Lógicos se utilizan para combinar más de una condición.
    El operador && verifica si la condición a la izquierda y a la derecha son verdaderas. Devuelve verdadero solo si ambas condiciones son verdaderas. De lo contrario, devuelve falso.
    El operador || verifica si ya sea la condición a la izquierda es verdadera o la de la derecha es verdadera. Devuelve verdadero incluso si una de las dos condiciones es verdadera.
    El operador ! verifica si la condición no se cumple. */

var raining = false;
var cloudy = true;
console.log("It is raining: ", raining);
console.log("It is cloudy: ", cloudy);
console.log("It is raining AND cloudy: ", raining && cloudy);
console.log("It is raining OR cloudy: ", raining || cloudy);
console.log("It is not raining: ", !raining);
console.log("It is not cloudy: ", !cloudy);

/* Evaluación de Cortocircuito
La evaluación de cortocircuito es un concepto en el que el compilador omitirá la verificación de subexpresiones en una declaración compuesta (una declaración con operadores lógicos) una vez que se determina el valor.
    exp1 && exp2 no evaluará exp2 si exp1 es falso porque si incluso una expresión es falsa con un &&, la expresión completa es falsa.
    exp1 || exp2 no evaluará exp2 si exp1 es verdadero porque si incluso una expresión es verdadera con un ||, la expresión completa es verdadera.
Esto puede ser muy útil al evaluar ciertas expresiones, y se debe aprovechar donde sea necesario. */

var chocolate = true;
var candy = false;
console.log("There is chocolate: ", chocolate);
console.log("There is candy: ", candy);
console.log(
  "There is candy AND chocolate: ",
  chocolate && candy,
  " -- Only candy is evaluated"
);
console.log(
  "There is chocolate OR candy: ",
  chocolate || candy,
  " -- Only chocolate is evaluated"
);
