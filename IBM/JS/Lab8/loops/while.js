/*  Los bucles while tienen solo una expresión:
    una condición en base a la cual se ejecuta un bloque de código. 
    Este es el mismo tipo de expresión que la segunda en un bucle for. */

// The code below is to find the length of the words the user is entering.
// The loop will go on and on until the user chooses not to continue by pressing 'n'
let do_more = true;
while (do_more) {
  //Accept a input from the user.
  let user_input = prompt("Enter a word");
  //Check if the user input is not a number and then print the length of the input
  if (isNaN(user_input)) {
    console.log("Length of the word you entered is " + user_input.length);
  } else {
    console.log("You entered a number. Only words are allowed");
  }
  let should_continue = prompt("Do you want to continue. Press n to stop");

  if (should_continue === "n") {
    do_more = false;
  }
}
