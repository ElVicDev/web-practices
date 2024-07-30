//    *** PURCHASE 1 Object   ***

var purchase1 = {
  shoes: 100, // Este es un objeto
  stateTax: 1.2, // Este es otro objeto
  totalPrice: function () {
    /* var calculation = purchase1.shoes * purchase1.stateTax; */
    // ** Puedo usar la palabra clave THIS para mejorar el programa y
    // ** seguirá funcionando igual que antes
    var calculation = this.shoes * this.stateTax;
    console.log("Total price:", calculation);
  },
};

purchase1.totalPrice(); // 120

console.log(purchase1.stateTax); // 1.2

//    *** PURCHASE 2 Object   ***

var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function () {
    /* var calculation = purchase2.shoes * purchase2.stateTax; */
    var calculation = this.shoes * this.stateTax;
    console.log("Total price:", calculation);
  },
};

purchase2.totalPrice();
