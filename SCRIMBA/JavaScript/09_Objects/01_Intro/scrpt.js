// * Objetos: almacenan datos en profundidad:
// * tipos de datos compuestos/complejos
// * pares clave-valor

let course = {
  title: "Learn CSS Grid for free",
  lessons: 16,
  creator: "Per Harald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"],
};

console.log(course.length);
console.log(course.tags);

// * ----------------------------------------------------------------------------
// * Crea un objeto que represente un anuncio de castillo de Airbnb.
// * Debe contener al menos un valor booleano, una cadena, un número y una matriz
// * Elimina al menos dos de las claves usando la notación de punto
// * ----------------------------------------------------------------------------
let castle = {
  title: "Live like a king in my castle",
  price: 190,
  isSuperHost: true,
  images: ["img/castle1.png", "img/caste2.png"],
};

console.log(castle.price);
console.log(castle.isSuperHost);
