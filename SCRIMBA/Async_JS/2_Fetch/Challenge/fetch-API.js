// Desafío:
// La API de marcador de posición JSON tiene un punto de conexión /users,
// tal como el que vimos en el tutorial para /posts
// Obtener el usuario con ID 3 y registrar su nombre y la empresa para la que trabaja.
// Gestionar errores si algo no funciona bien.

// Este es el punto de conexión: https://jsonplaceholder.typicode.com/users/3

fetch("https://jsonplaceholder.typicode.com/users/3")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((person) => {
    console.log(`${person.name} works for ${person.company.name}`);
  })
  .catch((err) => console.log(err));
