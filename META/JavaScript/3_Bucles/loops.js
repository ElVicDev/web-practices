// The for loop
console.log("El bucle FOR incrementando");
for (var i = 1; i<4; i++) {     // La variable se encuentra dentro del bucle
    console.log(i);
}

console.log("El bucle FOR decrementando");
for (var i = 3; i > 0; i--) {
  console.log(i);
}

// ------------------------------------------------------

// The while loop
console.log("El bucle WHILE incrementando");
var i = 1;                        // La variable se encuentra fuera del bucle

while (i < 4) {
    console.log(i);
    i=i+1;
}

console.log("El bucle WHILE decrementando");
var i = 3; 

while (i > 0) {
  console.log(i);
  i = i - 1;
}

// ------------------------------------------------------

// JavaScript nested loop

for (i = 0; i < 2; i++) {                     // Outer loop

  for (j = 1; j<=7; j++) {                    // Inner loop
    console.log("Week " + i + " day " + j)
  }
}

// ------------------------------------------------------

/* nested loops - one inside another 
Tabla de división personalizada
*/

for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

// ------------------------------------------------------

/* nested loops - Cubes
Nota: Para que se apliquen los estilos, ejecutar
este fragmento de código en la consola del navegador

Usted trabaja como desarrollador para una tienda en línea.
La tienda vende cubos de letras para niños pequeños, y toda la sección
"Compre ahora" del sitio está organizada en un diseño en el que cada cubo
a la venta se muestra en un simple componente de tarjeta, con una imagen
del cubo, la letra que enseña, una breve descripción y el precio.
Las tarjetas están organizadas en filas, de modo que cada fila
contiene tres tarjetas, tres letras diferentes.
Cada tarjeta es una vista previa de ese cubo de letras específico a la venta,
y también es un enlace a una página entera, dedicada a proporcionar
más información sobre los cubos, su valor didáctico, y a proporcionar
al visitante una forma de completar su proceso de compra.
¿dónde encajarían los bucles para mostrar esta cuadrícula de tarjetas
con los cubos de letras en oferta?
*/

var cubes = "ABCDEFG";
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {    // cubes.length devuelve un número
  var styles =
    "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[i], styles);
}
/* cubes[i] se dirige a cada letra individual en el bucle,
basado en el valor actual de la variable i.
En otras palabras, cubes[i], cuando i es igual a 0, es: A.
Entonces,cubes[i], cuando i es igual a 1, es: B.
Esto continúa durante tantos bucles como ejecute mi bucle for
y esto viene determinado por el valor cubes.length.
*/


// ------------------------------------------------------

/* nested loops - Premiación Olímpica
Dentro de un bucle for, escriba una sentencia if-else,
que comprobará las siguientes condiciones:
    1.- Primero, comprobará si el valor de i es  1.
        Si lo es, su código registrará por consola la cadena "Medalla de oro".
    2.- A continuación, comprobará si el valor de i es 2.
        Si lo es, su código registrará por consola la cadena "Medalla de plata" .
    3.- A continuación, su código comprobará si el valor de i es 3.
        Si lo es, registrará en consola la cadena "Medalla de bronce" .
    4.- Para todos los valores restantes de i,
        el código registrará en consola sólo el valor de i.
*/

for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold Medal");
  } else if (i == 2) {
    console.log("Silver Medal");
  } else if (i == 3) {
    console.log("Bronze Medal");
  } else {
    console.log(i);
  }
}

/* Utilice el código completado de la tarea anterior,
   pero convierta los condicionales en una sentencia switch.
   Cuando codifique la solución, la salida en la consola
   debe seguir siendo exactamente la misma que en la pregunta anterior.
   Nota: Se necesitan tres casos distintos para las tres medallas
         y un caso por defecto para todos los demás valores de la variable i.
*/

for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold Medal");
      break;
    case 2:
      console.log("Silver Medal");
      break;
    case 3:
      console.log("Bronze Medal");
      break;
    default:
      console.log(i);
  }
}
