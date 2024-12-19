// * Tarea 1: Codifique una clase Person
/*  Codifique una clase Person, con tres parámetros en el 
    constructor: nombre, edad y energía.
    Establezca los parámetros predeterminados en la clase 
    Person de la siguiente manera:
        name = "Tom"
        age = 20
        energy = 100
    Codifique dos métodos en la clase `Person`. 
    Nómbrelos `sleep()` y `doSomethingFun()`.
    El método `sleep()` debe tomar el nivel de energía 
    existente y aumentarlo en 10.
    El método doSomethingFun() debe tomar el nivel de 
    energía existente y disminuirlo en 10.
*/
class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
  }
  doSomethingFun() {
    this.energy -= 10;
  }
}

// * Tarea 2: Codificar una clase Worker
/*  Codificar una subclase, heredando de la clase `Person`, 
    y llamarla `Worker`.
    La clase `Worker` tiene dos parámetros adicionales en 
    el constructor:
        xp (para "puntos de experiencia")
        hourlyWage.
    Estas propiedades se establecen en los siguientes valores 
    predeterminados:
        xp = 0
        hourlyWage = 10
    La clase `Worker` tiene todos los parámetros y métodos 
    de su superclase.
    Además, tiene el método `goToWork()`, que, cada vez que 
    se ejecuta, aumenta el valor de la propiedad `xp` en 10.
*/
class Worker extends Person {
  constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }
  sleep() {
    super.sleep;
  }
  doSomethingFun() {
    super.doSomethingFun;
  }
  goToWork() {
    this.xp += 10;
  }
}

// * Tarea 3: Codificar un objeto intern
/*  Dentro de la función intern, instanciar la clase `Worker` 
    para codificar un nuevo objeto intern.
    El intern debe tener las siguientes características:
        nombre: Bob
        edad: 21
        energía: 110
        xp: 0
        salarioporhora: 10
    Ejecutar el método `goToWork()` en el objeto intern. 
    Luego `retornar` el objeto intern.
 */
function intern() {
  let intern = new Worker("Bob", 21, 110, 0, 10);
  intern.goToWork();
  return intern;
}
console.log(intern());

// * Tarea 4: Codificar un objeto manager
/*  Dentro de la función manager, instanciar la clase `Worker` 
    para codificar un nuevo objeto `manager`.
    El objeto manager debe tener las siguientes características:
        nombre: Alice
        edad: 30
        energía: 120
        xp: 100
        salarioporhora: 30
    Ejecute el método `doSomethingFun()` en el objeto 
    manager. Luego `retorne` el objeto manager.
*/
function manager() {
  let manager = new Worker("Alice", 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}
console.log(manager());
