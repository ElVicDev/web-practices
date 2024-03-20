(function () {
  "use strict";

  const submenus = document.querySelectorAll("ul li ul");

  function hideSubmenus() {
    for (let i = 0; i < submenus.length; i++) {
      submenus[i].className = "hide-menu";
    }
  }
  hideSubmenus();

  const menuLinks = document.querySelectorAll(".menulink");

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function (event) {
      event.preventDefault();

      const thisMenu = this.parentNode.querySelector("ul"); // this es una palabra clave en JS

      if (thisMenu.classList.contains("hide-menu")) {
        hideSubmenus();
        thisMenu.className = "show-menu";
      } else {
        thisMenu.className = "hide-menu";
      }
    });
  }
})();
