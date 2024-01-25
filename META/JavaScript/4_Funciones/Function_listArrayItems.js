// Construir y llamar funciones

/* --------------------------- EJEMPLO 1 ------------------------------------
 */

// Construimos nuestra función
function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

// Llamamos a nustra función
listArrayItems(colors);

/* --------------------------- EJEMPLO 2 ------------------------------------
Podemos actualizar la salida como se requiera
*/

// Construimos nuestra función 2
function listArrayItems2(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]); // Podemos asignarle un número al array
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

listArrayItems2(colors);

/* --------------------------- EJEMPLO 3 ------------------------------------
Podemos iniciar el recuento desde uno en lugar de cero
*/

// Construimos nuestra función 3
function listArrayItems3(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i + 1, arr[i]); // Podemos indicar que el array comience en 1
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

listArrayItems3(colors);

/* --------------------------- EJEMPLO 4 ------------------------------------
Podemos añadir una o más condiciones
*/

// Construimos nuestra función 4
function listArrayItems4(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "red") {
      // Si en el arreglo encuentra la palabra red, la cambiará y nos imprimirá la palabra tomato, continuando la numeración de 100 en 100
      console.log(i * 100, "tomato!");
    } else {
      console.log(i * 100, arr[i]); // Indicamos que la numeración sea de 100 en 100
    }
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

listArrayItems4(colors);
