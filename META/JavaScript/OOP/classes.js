//  *** CLASSES ***

// La clase comienza con una letra mayúscula
class Car {
  /*Se usa la función CONSTRUCTOR cuando se cren instancias de
    nuevos objetos */
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  /*Después del constructor se agregan los METODOS
    No se usa la palabra clave FUNCTION aquí.
    Solo se necesita el nombre del METODO */
  turboOn() {
    console.log("Turbo is on!");
  }
}

/*  Una vez que la CLASE esta lista, se construye el objeto CAR
    utilizando la palabra clave new y el nombre de esa clase,
    seguido de paréntesis de apertura y cierre,
    y argumentos opcionales */
const car1 = new Car("red", 120);

// Por último, ya se puede acceder a los METODOS y PROPIEDADES.
car1.turboOn();
