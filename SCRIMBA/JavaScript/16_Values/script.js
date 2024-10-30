const credits = 0;

if (credits > 0) {
  console.log("Let's play 🎰");
} else {
  console.log("Sorry, you have no credits 😭");
}

// * -----------------------
// * Truthy and falsy values
// * -----------------------
let currentViewers = null;
currentViewers = ["jane", "nick"];
currentViewers = null;
if (true) {
  // do something , e.g. notify the live streamers
  console.log("We have viewers"); // We have viewers
}

// * -----------------------

let currentViewers2 = ["jane"];
console.log(currentViewers2[5]); // Undefined

// * -----------------------

let trueOfFalse = Boolean("hello");
console.log(trueOfFalse); // true

let trueOfFalse2 = Boolean("");
console.log(trueOfFalse2); // false

console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(100)); // true
console.log(Boolean(null)); // false
console.log(Boolean([0])); // true
console.log(Boolean(-0)); // false
