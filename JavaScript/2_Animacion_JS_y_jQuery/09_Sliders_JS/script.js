window.addEventListener("load", function () {
  // ¿Cuántas diapositivas?
  const slideCount = document.querySelectorAll("#slider-wrapper ul li").length;
  // ¿Qué tan ancha es cada diapositiva?
  const slideWidth = document.querySelector("#slider-wrapper").offsetWidth;
  // Ancho total del control deslizante
  const totalWidth = slideCount * slideWidth + "px";
  // Elemento DOM deslizante
  const slider = document.querySelector("#slider-wrapper ul");
  // Botón siguiente
  const next = document.getElementById("next");
  // Botón anterior
  const previous = document.getElementById("prev");
  // Esquina superior izquierda del control deslizante
  let leftPosition = 0;
  // Para realizar un seguimiento de cada diapositiva
  let counter = 0;
  // Establece el ancho del control deslizante (que también está en el CSS)
  slider.style.width = totalWidth;

  /* next.addEventListener("click", function (evt) {
    evt.preventDefault();
    counter++;
    if (counter == slideCount) {
      // Poner el contador a 0
      counter = 0;
      // Establecer la posición izquierda en 0
      leftPosition = 0;
      // Mover el control deslizante a su posición
      slider.style.left = leftPosition;
    } else {
      // Mover el control deslizante a la siguiente diapositiva
      leftPosition = `-${counter * slideWidth}px`;
      slider.style.left = leftPosition;
    } */

  /* El código anterior documentado se puede mejorar de la siguiente manera: */
  next.addEventListener("click", function (evt) {
    evt.preventDefault();
    counter++;
    if (counter == slideCount) {
      counter = 0;
    }
    leftPosition = `-${counter * slideWidth}px`;
    slider.style.left = leftPosition;
  });

  previous.addEventListener("click", function (evt) {
    evt.preventDefault();
    counter--;
    if (counter < 0) {
      counter = slideCount - 1;
    }
    leftPosition = `-${counter * slideWidth}px`;
    slider.style.left = leftPosition;
  });
});
