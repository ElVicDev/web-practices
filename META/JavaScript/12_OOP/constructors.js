//  ***     Constructores      ***

/*  Además de las funciones constructoras para los objetos 
    incorporados, también puedo definir funciones constructoras 
    personalizadas. */

function Icecream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}

/*  Para utilizar una función constructora, 
    debo anteponerle el operador new. */

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
console.log(kiwiIcecream); // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
console.log(appleIcecream); // --> Icecream {flavor: 'apple', meltIt: ƒ}

kiwiIcecream.meltIt(); // The kiwi icecream has melted
appleIcecream.meltIt(); // The apple icecream has melted
