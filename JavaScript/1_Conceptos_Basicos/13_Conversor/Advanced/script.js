(function () {
  "use strict";

  let convertType = "miles";
  const heading = document.querySelector("h1");
  const intro = document.querySelector("p");
  const answerDiv = document.getElementById("answer");
  const form = document.getElementById("convert");

  // Add Two Event Listeners
  document.addEventListener("keydown", function (event) {
    // Handle keypress of K or M key
    const key = event.code;

    if (key === "KeyK") {
      // Change the heading
      // Change the intro paragraph
      // Change the value of the converType variable
      convertType = "kilometers";
      heading.innerHTML = "Kilometers to Miles Converter";
      intro.innerHTML =
        "Type in a number of kilometers and click the button to convert the distance to miles.";
    } else if (key === "KeyM") {
      convertType = "miles";
      heading.innerHTML = "Miles to Kilometers Converter";
      intro.innerHTML =
        "Type in a number of miles and click the button to convert the distance to kilometers.";
    }
  });

  form.addEventListener("submit", function (event) {
    // Handle submission of form & distance conversion
    event.preventDefault(); // Evita que el formulario se procese o intente acceder al archivo PHP cuando enviemos el formulario.

    const distance = parseFloat(document.getElementById("distance").value);

    if (distance) {
      //	Convert M to K 1.609344
      //	Convert K to M 0.621371192
      if (convertType == "miles") {
        const converted = (distance * 1.609344).toFixed(3);
        answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers`;
      } else {
        const converted = (distance * 0.621371192).toFixed(3);
        answerDiv.innerHTML = `${distance} kilometers converts to ${converted} miles`;
      }
    } else {
      answerDiv.innerHTML = "<h2>Please provide a number!</h2>";
    }
  });
})();
