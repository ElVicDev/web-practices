// * -----------------------
//*  Arguments vs Parameters
// * -----------------------

// * NOTA:
// * PARAMETERS van dentro de la función
// * ARGUMENTS van fuera de la función

// What are greeting and name? PARAMETERS
// What are "Howdy" and "James"? ARGUMENTS
// What are num1 and num2? PARAMETERS
// What are 3 and 4? ARGUMENTS

//.                parameters
function greetUser(greeting, name) {
  welcomeEl.textContent = `${greeting}, ${name} 👋`;
}

//.        arguments
let hi = "Howdy";
greetUser(hi, "James");

function add(num1, num2) {
  return num1 + num2;
}

add(3, 4);
