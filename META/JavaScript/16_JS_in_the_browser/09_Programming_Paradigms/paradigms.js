// * ------------------------------
// * Ejemplo 1
// * ------------------------------
function scopeTest() {
  var y = 44;

  console.log(x);
}

var x = 33;
scopeTest(); // 33

// * ------------------------------
// * Ejemplo 2
// * ------------------------------
class Cake {
  constructor(lyr) {
    this.layers = lyr;
  }

  getLayers() {
    return this.layers;
  }
}

class WeddingCake extends Cake {
  constructor() {
    super(2);
  }

  getLayers() {
    return super.getLayers() * 5;
  }
}

var result = new WeddingCake();
console.log(result.getLayers()); // 10

// * ------------------------------
// * Ejemplo 3
// * ------------------------------
class Animal {}

class Dog extends Animal {
  constructor() {
    super();
    this.noise = "bark";
  }

  makeNoise() {
    return this.noise;
  }
}

class Wolf extends Dog {
  constructor() {
    super();
    this.noise = "growl";
  }
}

var result = new Wolf();
console.log(result.makeNoise()); // growl

// * ------------------------------
// * Ejemplo 4
// * ------------------------------
function count(...food) {
  console.log(food.length);
}

count("Burgers", "Fries", null); // 3
