class Animal {
  // El constructor tiene dos propiedades: color y energy
  constructor(color = "yellow", energy = 100) {
    this.color = color;
    this.energy = energy;
  }
  // Primer Método.
  // Siempre que se ejecute, reducirá el valor deenergy hasta que alcance 0.
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log("Energy is decreasing, currently at:", this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  // Segundo Método.
  // Si energy es 0, el objeto animal se dormirá inmediatamente, invocando el método sleep()
  sleep() {
    this.energy += 20;
    console.log("Energy is increasing, currently at:", this.energy);
  }
  // Tercer Método.
  // Solo registra por consola el valor de la propiedad color
  getColor() {
    console.log(this.color);
  }
}

/* La clase Cat heredará de Animal, con las propiedades adicionales sound,
    canJumpHigh, y canClimbTrees específicas de la clase Cat. También 
    tendrá su propio método makeSound() */
class Cat extends Animal {
  constructor(
    sound = "purr",
    canJumpHigh = true,
    canClimbTrees = true,
    color,
    energy
  ) {
    super(color, energy);
    this.sound = sound;
    this.canClimbTrees = canClimbTrees;
    this.canJumpHigh = canJumpHigh;
  }
  makeSound() {
    console.log(this.sound);
  }
}

/* La clase Bird también heredará de Animal, pero sus propias propiedades 
    específicas serán muy diferentes de las de Cat. En concreto, la 
    clase Bird tendrá las propiedades sound y canFly, y también el 
    método makeSound. */
class Bird extends Animal {
  constructor(sound = "chirp", canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(this.sound);
  }
}

/* La clase HouseCat extenderá la clase Cat, y tendrá su propia 
    houseCatSound como propiedad especial. Anulará el método 
    makeSound() de la claseCat en función de si le pasamos true o false*/
class HouseCat extends Cat {
  constructor(
    houseCatSound = "meow",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

/* La clase Tiger también heredará de Cat, y tendrá su propia propiedad 
    tigerSound. El resto del comportamiento será el mismo que en la 
    clase HouseCat.  */
class Tiger extends Cat {
  constructor(
    tigerSound = "Roar!",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

/*  La clase Parrot extenderá la clase Bird, con su propia propiedad
    canTalk, y su propio método makeSound().
    Trabajará con dos condicionales: 
    true si fue pasado amakeSound durante la invocación,
     y otro que comprueba el valor almacenado dentro de la propiedad
     this.canTalk. */
class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log("I'm a talking parrot!");
    }
  }
}

var fiji = new Parrot(false); // Estamos pasando `false` al constructor para que Fiji no pueda hablar
var polly = new Parrot(true); // Estamos pasando `true` al constructor para que Polly pueda hablar

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // Configurar todas las propiedades personalizadas
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!
