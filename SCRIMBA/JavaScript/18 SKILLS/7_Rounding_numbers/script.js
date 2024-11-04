// * -------------------
// * Redondeo de números
// * -------------------

// Desafío:
// Redondea el precio que aparece en el botón a dos decimales.
// ¿No sabes qué método usar? ¡Búscalo en Google!

const totalPrice = 420.69235632455;
const btn = document.getElementById("purchase-btn");
btn.textContent = `Buy €${totalPrice.toFixed(2)}`;

// * -----------------------------------------------
// * NOTA: toFixed() redondea el número hacia arriba
// * -----------------------------------------------
