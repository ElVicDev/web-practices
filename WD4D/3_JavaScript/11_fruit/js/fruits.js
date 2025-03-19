var fruits = ["Banana", "Orange", "Apple", "Mango"];

function loadFruits() {
	// body...
	document.getElementById("fruits").innerHTML = fruits;
}

function myFunction() {
	// body...
	var fruit = prompt("What is your favorite fruit? ");
	fruits[fruits.length] = fruit;
	document.getElementById("fruits").innerHTML = fruits;
}