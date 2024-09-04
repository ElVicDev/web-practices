//  *** The problem with Callbacks

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  getRestaurants(position, (restaurants) => {
    console.log(restaurants);
    console.log("done");
  });
});

// setTimeout()

// addEventListener()
