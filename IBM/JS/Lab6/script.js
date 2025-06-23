function temperature() {
  //To convert celsius to farenheit
  //(CEL * 9/5) + 32
  var c = document.getElementById("celsius").value;
  var f = (c * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = f;
}

function weight() {
  //To convert KGs to Pounds
  // KG * 2.20462
  var kg = document.getElementById("kilo").value;
  var p = Number((kg * 2.20462).toFixed(2));
  document.getElementById("pounds").value = p;
}

function distance() {
  //To convert KMs to Miles
  // KM / 1.609
  var km = document.getElementById("km").value;
  var m = Number((km / 1.609).toFixed(2));
  document.getElementById("miles").value = m;
}
