/*Añade aquí el JavaScript para la función billingFunction(). 
  Es responsable de configurar y limpiar los campos en Información de facturación. */

function billingFunction() {
  if (document.getElementById("same").checked) {
    document.getElementById("billingName").value =
      document.getElementById("shippingName").value;
    document.getElementById("billingZip").value =
      document.getElementById("shippingZip").value;
  } else {
    document.getElementById("billingName").value = "";
    document.getElementById("billingZip").value = "";
  }
}
