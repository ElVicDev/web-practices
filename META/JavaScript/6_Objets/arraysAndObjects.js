//  * Ejercicio: Creación de matrices y objetos
/*  1 - Cree un nuevo literal de array vacío y asígnelo a la variable clothes.
    2 - Añada 5 de sus prendas de ropa favoritas como cadenas 
        utilizando el método push().
    3 - Elimine la quinta pieza de ropa del array utilizando el método pop().
    4 - Añada una nueva pieza de ropa utilizando el método push().
    5 - Utilice console.log para mostrar el tercer artículo de la matriz clothes 
        en la consola.
    6 - Cree un nuevo literal de objeto vacío y asígnelo a la variable favCar.
    7 - Utilizando la notación de puntos, asigne una propiedad color 
        al objeto favCar y dele un valor de cadena con el color de su elección.
    8 - Utilizando la notación de puntos, asigne una propiedad covertible 
        al objeto favCar y dele un valor booleano de su elección.
    9 - Utilice la consola para registrar todo el objeto favCar.
*/

var clothes = [];
clothes.push("camisa");
clothes.push("playera");
clothes.push("chamarra");
clothes.push("sweter");
clothes.push("corbata");
console.log(clothes);

clothes.pop();
console.log(clothes);

clothes.push("cinturón");
console.log(clothes);

console.log(clothes[2]);

var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);

var clothes = [];
clothes.push("gray t-shirt"); // 1st item of clothing
clothes.push("blue t-shirt"); // 2nd item of clothing
clothes.push("yellow t-shirt"); // 3rd item of clothing
clothes.push("slippers"); // 4th item of clothing
clothes.push("old jeans"); // 5th item of clothing
clothes.pop();
clothes.push("green scarf");
console.log(clothes[2]);

var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
