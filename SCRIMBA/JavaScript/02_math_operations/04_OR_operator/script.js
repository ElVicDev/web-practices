// * -----------------------
// * The logical OR operator
// * -----------------------

let hasCompletedCourse = true;
let givesCertificate = true;

if (hasCompletedCourse === true || givesCertificate === true) {
  generateCertificate();
}

function generateCertificate() {
  console.log("Generating certificate....");
}

// * -------------------------------------------------------------------
// * Crea dos variables booleanas, likesDocumentaries y likesStartups
// * Utiliza una declaración OR (||) para llamar a recommendationMovie()
// * si alguna de esas variables es verdadera.
// * -------------------------------------------------------------------
let likesDocumentaries = false;
let likesStartups = true;

if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie();
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!");
}
