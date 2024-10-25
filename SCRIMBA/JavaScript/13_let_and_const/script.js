// * ---------------------------
// * Cuándo utilizar let y const
// * ---------------------------

// Si es posible, use const. Si no, use let.
// ¿Qué variables de las siguientes se deben cambiar de let a const?
// El cliente quiere pedir algunas cosas. Estos son los detalles:
const basePrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days";

// ¡Ups! Resulta que el envío será un poco más complejo.
shippingCost = 15;
shippingTime = "7-14 days";

// Calcular el precio total
const fullPrice = basePrice - discount + shippingCost;

// Finalmente, notificando al cliente.
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime);
