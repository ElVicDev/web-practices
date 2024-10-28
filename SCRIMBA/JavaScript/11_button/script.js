let myLeads = [
  "https://www.elvicdev.com",
  "www.epiclead.com",
  "www.greatlead.com",
];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
// Toma la lista desordenada y almacénala en una variable constante llamada ulEl
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Representar los clientes potenciales en la lista desordenada usando ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
  // console.log(myLeads[i]);
  // ulEl.textContent += myLeads[i] + " ";
  // How to render <li> elements with innerHTML
  // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
  // create element
  // set text content
  // append to ul
  const li = document.createElement("li");
  li.textContent = myLeads[i];
  ulEl.append(li);
}
