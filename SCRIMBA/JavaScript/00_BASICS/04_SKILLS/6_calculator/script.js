let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// Crea cuatro funciones: sumar(), restar(), dividir(), multiplicar()
// Llama a la función correcta cuando el usuario hace clic en uno de los botones
// Realiza el cálculo indicado utilizando num1 y num2
// Representa el resultado del cálculo en el párrafo con id="sum-el"

// Por ejemplo, si el usuario hace clic en el botón "Más", debes representar
// "Suma: 10" (ya que 8 + 2 = 10) dentro del párrafo con id="sum-el"

let resEl = document.getElementById("res-el");

function add() {
  let result = num1 + num2;
  resEl.textContent = "Sum result: " + result;
}

function subtract() {
  let result = num1 - num2;
  resEl.textContent = "Subtraction result: " + result;
}

function divide() {
  let result = num1 / num2;
  resEl.textContent = "Division result: " + result;
}

function multiply() {
  let result = num1 * num2;
  resEl.textContent = "Multiplication result: " + result;
}
