(function () {
  "use strict";

  const divTag = document.querySelector("div");
  const btn = document.querySelector("button");

  btn.addEventListener("click", function () {
    let newP = document.createElement("p");
    let pText = document.createTextNode("A new paragraph");
    newP.appendChild(pText);
    divTag.appendChild(newP);
  });

  /*  Este código también funcionaría:

  const divTag = document.querySelector('div');
  const btn = document.querySelector('button');

  btn.onclick = function(){
      let newP = document.createElement('p');
      let pText = document.createTextNode('A new  paragraph');
      newP.appendChild(pText);
      divTag.appendChild(newP);
  };
*/
})();
