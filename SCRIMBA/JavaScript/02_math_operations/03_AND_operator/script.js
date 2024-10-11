// * ---------------------
// * Example AND operator
// * ---------------------

let hasCompletedCourse = false;
let givesCertificate = true;

if (hasCompletedCourse === true && givesCertificate === true) {
  generateCertificate();
}

function generateCertificate() {
  console.log("Generating certificate....");
}

// * ---------------------------------
// * Escribe tu primer operador lógico
// * ---------------------------------
let hasSolvedChallenge = false;
let hasHintsLeft = false;

// Cree una declaración if que verifique que ambas variables sean falsas.
// Si es así, ejecute la función showSolution()
if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution();
}

function showSolution() {
  console.log("Showing the solution....");
}
