/* 1.	Los operadores aritméticos son operadores que utilizamos para realizar operaciones aritméticas.
        El operador + (más) se utiliza para sumar
        El operador - (menos) se utiliza para restar
        El operador * (estrella o asterisco) se utiliza para multiplicar
        El operador / (barra) se utiliza para dividir
        El operador ** (doble estrella) se utiliza para la exponenciación/potencia
        El operador % (porcentaje) se utiliza para la operación de módulo (el residuo que queda después de la división) */

console.log("5 + 3 = ", 5 + 3);
console.log("7 - 3 = ", 7 - 3);
console.log("8 * 2 = ", 8 * 2);
console.log("27 / 3 = ", 27 / 3);
console.log("4 to the power of 3 = ", 4 ** 3);
console.log("19 mod 4 = ", 19 % 4);

/*  El operador más (+) también se utiliza para la concatenación de cadenas.
    Al usar un + con un número y una cadena, ambos se tratan como una cadena y se concatenan en lugar de sumarse.
    Las expresiones se leen de izquierda a derecha, por lo que al sumar dos números y luego una cadena, 
    se interpretará el primer + como suma y el segundo + como concatenación. */

console.log("5 + 3 = ", 5 + 3);
console.log('5 + "3" = ', 5 + "3");
console.log('5 + 5 + "3" = ', 5 + 5 + "3");
console.log('"3" + 5 + 5 = ', "3" + 5 + 5);
console.log('5 + 5 + "3" + 5 = ', 5 + 5 + "3" + 5);
