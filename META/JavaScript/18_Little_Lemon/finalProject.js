// Given variables
const dishData = [
  {
    name: "Italian pasta",
    price: 9.55,
  },
  {
    name: "Rice with veggies",
    price: 8.65,
  },
  {
    name: "Chicken with potatoes",
    price: 15.55,
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45,
  },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (var dish of dishData) {
    var finalPrice;
    if (taxBoolean === true) {
      finalPrice = dish.price * tax;
    } else if (taxBoolean === false) {
      finalPrice = dish.price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }
    console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
  }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);
  if (guests >= 0 && guests <= 30) {
    var discount = 0;
    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }
    console.log(`Discount is: $${discount}`);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}

// Call getDiscount() with different arguments
getDiscount(true, 2); // Discount is: $5
getDiscount(false, 10); // Discount is: $10
getDiscount(true, 40); // The second argument must be a number between 0 and 30
getDiscount(true, 0); // Discount is: $5
getDiscount(true, 5); // Discount is: $10
getDiscount(true, 29); // Discount is: $10
getDiscount(true, 30); // Discount is: $10
getDiscount(true, 1); // Discount is: $5
getDiscount(); // You need to pass a boolean to the getPrices call! The second argument must be a number between 0 and 30
getDiscount(true); // The second argument must be a number between 0 and 30
getDiscount(false); // The second argument must be a number between 0 and 30
getDiscount(1, 2); // You need to pass a boolean to the getPrices call! Discount is: $5
