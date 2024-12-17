var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (var items of dairy) {
    console.log(items);
  }
}
logDairy();

// * ---------------------------------------------

const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (var skills of bird) {
    console.log(skills);
  }
}
birdCan();
