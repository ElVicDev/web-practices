(function () {
  "use strict";

  let counter = 1;

  function contentRotator() {
    $(`#container p:nth-child(${counter})`).fadeIn(2000, function () {
      if ($(this).is("#container p:last-child")) {
        // Esperar siete segundos
        setTimeout(function () {
          // Desvanecer el párrafo
          $(`#container p:nth-child(${counter})`).fadeOut(2000, function () {
            // Poner el contador en 1
            counter = 1;
            // Ejecutar contentRotator nuevamente
            contentRotator();
          });
        }, 7000);
      } else {
        // Esperar siete segundos
        setTimeout(function () {
          // Desvanecer el párrafo
          $(`#container p:nth-child(${counter})`).fadeOut(2000, function () {
            // Incrementar el contador
            counter++;
            // Ejecutar contentRotator nuevamente
            contentRotator();
          });
        }, 7000);
      }
    });
  }

  contentRotator();
})();
