// * --------------------------
// * Convertir cadena en número
// * --------------------------

// Desafío:
// El método toFixed() ya no funciona. ¿Puedes hacer que funcione?
// Busca el mensaje de error en Google si no estás seguro de cómo hacerlo

const totalPrice = "420.69235632455";
const btn = document.getElementById("buy-btn");
btn.textContent = `Buy €${Number(totalPrice).toFixed(2)}`;

// Utilizando Number() convertimos la cadena a número
