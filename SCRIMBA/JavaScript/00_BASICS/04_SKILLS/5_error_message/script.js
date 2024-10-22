// Cuando el usuario hace clic en el botón de compra, se muestra
// "Algo salió mal, por favor inténtalo de nuevo" en el párrafo
// que tiene el id="error".

let errorParagraph = document.getElementById("error");
// console.log(errorParagraph)

function purchase() {
  // console.log("button clicked")
  errorParagraph.textContent = "Something went wrong, please try again";
}
