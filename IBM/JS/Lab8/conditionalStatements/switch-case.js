/* Las declaraciones switch-case se utilizan para reemplazar múltiples 
condiciones if - else if que verifican la misma variable.
Después de que se satisface una de las condiciones y se ejecuta el bloque de código,
el control debe salir explícitamente del bloque switch con break.
De lo contrario, se ejecutarán todas las demás condiciones hasta que se encuentre 
una declaración break o hasta que no haya más código. */

let user_input = prompt("Enter a number between 1 to 7");
//Using logical OR operator to check if the input is a number and it is between 1 to 7
if (isNaN(user_input) || user_input < 1 || user_input > 7) {
  console.log("Invalid input");
} else {
  user_input = parseInt(user_input);
  switch (user_input) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid entry");
  }
}
