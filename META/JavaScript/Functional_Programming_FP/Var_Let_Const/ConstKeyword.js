//      ***     const keyword       ***

/* 1. La variable const debe inicializarse */

//  console.log(user); // Error!
//  const user;

/*  2. No podemos acceder a la variable constante antes de la inicialización */
//  console.log(user); // Unexpected token error
const user = "Andrew";

/*  3. No podemos redeclarar una variable constante*/
user = "Anna"; // TypeError: Assignment to constant variable.
