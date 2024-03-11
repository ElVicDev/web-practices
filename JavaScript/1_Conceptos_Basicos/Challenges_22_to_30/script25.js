(function () {
  "use strict";

  const divTag = document.querySelector("div");
  const btnAdd = document.querySelectorAll("button")[0];
  const btnDelete = document.querySelectorAll("button")[1];

  btnAdd.addEventListener("click", function () {
    let newP = document.createElement("p");
    let pText = document.createTextNode("A new paragraph");
    newP.appendChild(pText);
    divTag.appendChild(newP);
  });
  btnDelete.addEventListener("click", function () {
    let allPs = document.querySelectorAll("p");
    divTag.removeChild(divTag.childNodes[allPs.length - 1]);
  });
})();
