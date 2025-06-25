const orders = [
  { item: "Espresso", quantity: 2, price: 3.5 },
  { item: "Latte", quantity: 3, price: 4.0 },
  { item: "Cappuccino", quantity: 1, price: 4.5 },
];

function generateReceipt(orders) {
  let grandTotal = 0;
  console.log("Recibo:");
  console.log("----------------------");
  for (let i = 0; i < orders.length; i++) {
    const itemTotal = orders[i].quantity * orders[i].price;
    grandTotal += itemTotal;
    console.log(
      `${orders[i].item} - Cantidad: ${orders[i].quantity}, Precio: $${orders[i].price}, Total: $${itemTotal}`
    );
  }
  console.log("----------------------");
  console.log(`Total General: $${grandTotal}`);
}

generateReceipt(orders);
