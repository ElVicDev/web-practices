let age = 15;

// menores de 6 años -> gratis
// de 6 a 17 años -> descuento para niños
// de 18 a 26 años -> descuento para estudiantes
// de 27 a 66 años -> precio completo
// mayores de 66 años -> descuento para jubilados

// Crea una declaración condicional (if/else/else if) que desactive el descuento
// que obtendrá el pasajero en función del valor de la variable de edad

if (age < 6) {
  console.log("Free");
} else if (age < 18) {
  console.log("Child discount");
} else if (age < 27) {
  console.log("Student discount");
} else if (age < 67) {
  console.log("Full price");
} else {
  console.log("Senior citizen discount");
}
