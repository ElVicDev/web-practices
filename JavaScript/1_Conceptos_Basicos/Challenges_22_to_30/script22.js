(function () {
  "use strict";

  const btn = document.querySelector("button");
  const pTag = document.querySelector("p");

  btn.onclick = function () {
    pTag.style.color = "green";
  };

  /*  Este código también funcionaría:  
        btn.addEventListener('click', function(){
            pTag.style.color = "green";
        });
    */
})();
