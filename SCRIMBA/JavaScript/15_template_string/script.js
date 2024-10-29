// * --------------------------------
// * Write your first template string
// * --------------------------------

// template strings/literals

const recipient = "James";

// Refactor the email string to use template strings
// const email = "Hey " + recipient + "! How is it going? Cheers Per";
// const email = `Hey ${recipient}! How is it going? Cheers Per`;

/* Haga que la cadena de plantillas sea aún más dinámica
Crea una nueva variable, sender, y establece su valor en tu nombre
Utiliza tu variable sender en lugar de "Per" */
const sender = "ElVicDev";
const email = `Hey ${recipient}! How is it going? Cheers ${sender}`;
console.log(email);
