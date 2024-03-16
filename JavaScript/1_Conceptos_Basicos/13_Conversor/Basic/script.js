(function () {
  "use strict";

  document
    .getElementById("convert")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que el formulario se procese o intente acceder al archivo PHP cuando enviemos el formulario.

      const distance = parseFloat(document.getElementById("distance").value);
      const answerDiv = document.getElementById("answer");

      // See is Distance Contains a number
      if (distance) {
        // Convert and round the distance
        // Put the answer in the bottom div using innerHTML
        const conversion = (distance * 1.609344).toFixed(3);

        answerDiv.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
      } else {
        // Put an error message in the buttom div
        answerDiv.innerHTML = `<h2>Please provide a number!</h2>`;
      }
    });
})();
