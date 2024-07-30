//  *** FUNCTIONAL PROGRAMMING  ***
var shoes = 100;
var stateTax = 1.2;
function totalPrice(shoes, tax) {
  return shoes * tax;
}
var toPay = totalPrice(shoes, stateTax);
console.log(toPay); // 120

//  *** OOP1  ***
var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = purchase1.shoes * purchase1.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase1.totalPrice(); // Total price: 120

//  *** OOP2  ***
var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = purchase2.shoes * purchase2.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase2.totalPrice(); // Total price: 60

// * ------------------------------------------------------- *
//  *** OOP3  ***
var purchase3 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    // Uso palabra clave THIS para referirme al objeto en sí sin especificar su nombre
    var calculation = this.shoes * this.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase3.totalPrice(); // Total price: 120

//  * ------------------------------------------------------ *
//  *****   NOTA  *****
//  * Una forma de construir eficientemente nuevos objetos
//  * es mediante el uso de CLASES
//  * ------------------------------------------------------ *
