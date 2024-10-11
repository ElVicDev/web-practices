let sentence = ["Hello", "my", "name", "is", "Per"];
let greetingEl = document.getElementById("greeting-el");

// Representa la oración en el párrafo greetingEl usando un bucle for y .textContent
for (let i = 0; i < sentence.length; i += 1) {
  greetingEl.textContent += sentence[i] + " ";
}
