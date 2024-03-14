(function () {
  "use strict";

  let currentImage = 0;
  const myPhothos = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];
  const container = document.getElementById("content");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("previous");

  /* Add the Next Button Event Listener */
  nextBtn.addEventListener("click", function (event) {
    event.preventDefault();

    currentImage++;
    if (currentImage > myPhothos.length - 1) {
      currentImage = 0;
    }

    swapImage();
  });

  /* Add the Previous Button Handler */
  prevBtn.addEventListener("click", function (event) {
    event.preventDefault();

    currentImage--;
    if (currentImage < 0) {
      currentImage = myPhothos.length - 1;
    }

    swapImage();
  });

  /* Create a function that simplify the duplicate code. */
  function swapImage() {
    const newSlide = document.createElement("img");
    newSlide.src = `slides/${myPhothos[currentImage]}`;
    newSlide.className = "fadeinimg";
    container.appendChild(newSlide);

    if (container.children.length > 2) {
      container.removeChild(container.children[0]);
    }
  }
})();
