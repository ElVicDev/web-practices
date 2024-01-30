//  *   THROW, TRY and CATCH

//  Ejemplo de TRY - CATCH
/*  Si un fragmento de códo lanza error, 
    puede quedar envuelto dentro de un bloque try.
*/
try {
  console.log(c + d);
} catch (err) {
  console.log(err);
  //    do something here...
}
console.log("This line now runs");

// -----------------------------------------------------

//  Otro ejemplo de TRY - CATCH
try {
  console.log(a + b);
} catch (err) {
  // Podemos llamarlo err o como queramos
  // console.log(err)
  console.log("There was an error");
  console.log("The error was saved in the error log");
}
console.log("My program does not stop");

// -----------------------------------------------------

//  Ejemplo de THROW
/*  Forzamos que se lance un error desde el bloque try al bloque catch.
    Utilizar la palabra clave throw fuera del bloque try, 
    pero no es posible atraparlo.
    El bloque catch acepta algo llamado error que es un objeto.
*/
try {
  throw new Error();
} catch (err) {
  console.log(err);
}
console.log("This line now runs");

// -----------------------------------------------------

//  Otro ejemplo de THROW
//  No solo Javascript lanza errores. También puedo lanzar un error con throw
//  throw new ReferenceError();

// -----------------------------------------------------

// Como responde javaScript cuando lanzo manualmente un error.
try {
  throw new ReferenceError();
} catch (err) {
  console.log(err);
  console.log("There was a Reference Error");
}
console.log("My program does not stop");
