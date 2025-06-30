/* Para encontrar la posición del índice y el valor, podemos usar 
    el método genérico Object.entries, que se puede utilizar con todos los objetos de colección. 
    Esto mapea cada posición del índice al valor. */

let myArray = ["Jack", "Jill", 4, 5, true, "John"];
for (const [index, value] of Object.entries(myArray)) {
  console.log(index, " - ", value);
}
