// * -------------------
// * Renderizar imágenes
// * -------------------

// Crea una función que represente las imágenes de los tres equipos
// Usa un bucle for, cadenas de plantilla (``), más igual (+=)
// .innerHTML para resolver el desafío.

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];
const container = document.getElementById("container");

function renderImages() {
  let imgsDOM = "";
  for (let i = 0; i < imgs.length; i++) {
    imgsDOM += `<img class="team-img" src="${imgs[i]}" alt="Employee in the company">`;
  }
  container.innerHTML = imgsDOM;
}

renderImages();
