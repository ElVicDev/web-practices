/* Los operadores de asignación son operadores que se utilizan para asignar valores a las variables.
    El operador = se utiliza para asignar el valor de la derecha a la variable de la izquierda.
    El operador += se utiliza para incrementar el valor almacenado en el operando de la izquierda por el valor del operando de la derecha y almacenarlo de nuevo en el operando de la izquierda (lo mismo que escribir tmp = tmp + val donde tmp es una variable y val es un valor arbitrario).
    El operador -= se utiliza para decrementar el valor almacenado en el operando de la izquierda por el valor del operando de la derecha y almacenarlo de nuevo en el operando de la izquierda (lo mismo que escribir tmp = tmp - val donde tmp es una variable y val es un valor arbitrario).
    El operador *= se utiliza para multiplicar el valor almacenado en el operando de la izquierda por el valor del operando de la derecha y almacenarlo de nuevo en el operando de la izquierda (lo mismo que escribir tmp = tmp * val donde tmp es una variable y val es un valor arbitrario).
    El operador /= se utiliza para dividir el valor almacenado en el operando de la izquierda por el valor del operando de la derecha y almacenarlo de nuevo en el operando de la izquierda (lo mismo que escribir tmp = tmp / val donde tmp es una variable y val es un valor arbitrario).
    El operador **= se utiliza para elevar el valor almacenado en el operando de la izquierda a la potencia del valor del operando de la derecha y almacenarlo de nuevo en el operando de la izquierda (lo mismo que escribir tmp = tmp ** val donde tmp es una variable y val es un valor arbitrario).
    El operador %= se utiliza para obtener el módulo del valor almacenado en el operando de la izquierda por el valor del operando de la derecha y almacenarlo de nuevo en el operando de la izquierda (lo mismo que escribir tmp = tmp % val donde tmp es una variable y val es un valor arbitrario).
 */

x = 5;
console.log("Old value of x: ", x);
x += 3;
console.log("New value of x: ", x);

y = 5;
console.log("Old value of y: ", y);
y -= 3;
console.log("New value of y: ", y);

a = 6;
console.log("Old value of a: ", a);
a *= 3;
console.log("New value of a: ", a);

b = 6;
console.log("Old value of b: ", b);
b /= 3;
console.log("New value of b: ", b);

c = 6;
console.log("Old value of c: ", c);
c %= 3;
console.log("New value of c: ", c);

d = 6;
console.log("Old value of d: ", d);
d **= 3;
console.log("New value of d: ", d);
