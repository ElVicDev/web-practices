let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// Debes arreglar la matriz largeCountries para que
// China y Pakistán se agreguen nuevamente a sus lugares respectivos

// Usa push() y pop() y sus contrapartes unshift() y shift()
// Busca en Google cómo usar unshift() y shift()

console.log(largeCountries);

largeCountries.push("China", "Pakistan");
console.log(largeCountries);

largeCountries.pop();
console.log(largeCountries);

largeCountries.pop();
console.log(largeCountries);

// * unshift() agrega elementos al inicio del array
// * y devuelve la nueva longitud del array
console.log(largeCountries.unshift("China", "Pakistan")); // Nos muestra la nueva longitud del array (7)
console.log(largeCountries); // nos muestra los elementos que contiene el array

// * shift() elimina el primer elemento al inicio del array y lo retorna.
console.log(largeCountries.length); // Nos proporciona la longitud del array (7)
console.log(largeCountries.shift()); // Retorna que elemento ha sido eliminado (China)
console.log(largeCountries.length); // Nos proporciona la longitud del array (6)
console.log(largeCountries);

console.log(largeCountries.shift()); // Retorna que elemento ha sido eliminado (Pakistan)
console.log(largeCountries.length); //Nos proporciona la longitud del array (5)
console.log(largeCountries); // nos muestra los elementos que contiene el array

// * Elimina Monaco y agrega Pakistan al final del array
largeCountries.pop();
largeCountries.push("Pakistan");
console.log(largeCountries);

// * Elimina Tuvalu y agrega China al inicio del array
largeCountries.shift();
largeCountries.unshift("China");
console.log(largeCountries);
