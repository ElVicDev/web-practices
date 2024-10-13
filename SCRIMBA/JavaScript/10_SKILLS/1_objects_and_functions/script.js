// Cree un objeto de persona que contenga tres claves: nombre, edad y condado.
// Use su propio ejemplo para establecer los valores de nombre, edad y país.

// Cree una función, logData(), que use el objeto de persona para crear una
// cadena con el siguiente formato:
// "Per tiene 35 años y vive en Noruega"

// Llame a la función logData() para verificar que funciona

let person = {
  name: "ElVicDev",
  age: 8,
  country: "Mex",
};

function logData() {
  console.log(
    person.name +
      " is " +
      person.age +
      " years old and lives in " +
      person.country
  );
}

logData();
