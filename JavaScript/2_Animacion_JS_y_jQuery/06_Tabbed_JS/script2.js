(function () {
  "use strict";

  const tabs = document.querySelectorAll("#tabs > ul > li > a");

  /* for (let i = 0; i < tabs.length; i++) {
        tabs[i], addEventListener("click", selectTab);
    } */
  /* Este código hace exáctamente lo mismo que el for anteriormente comentado */
  /* Eliminamos la palabra function y agragamos => lo cual hace lo mismo:
        tabs.forEach(function(tab) { */
  tabs.forEach((tab) => {
    tab.addEventListener("click", selectTab);
  });

  function selectTab(event) {
    event.preventDefault();

    /*  for (let i = 0; i < tabs.length; i++) {
            tabs[i].removeAttribute("class");
        } */
    /*  Este código hace exáctamente lo mismo que el for anteriormente comentado */
    /* Eliminamos la palabra function y agragamos => lo cual hace lo mismo:
        tabs.forEach(function(tab) { */
    tabs.forEach((tab) => {
      tab.removeAttribute("class");
    });

    event.target.className = "active";

    const thisTab = event.target.getAttribute("href");
    const thisContent = document.querySelector(thisTab);
    const oldTabContent = document.querySelector(".visible");
    oldTabContent.className = "visuallyhidden";

    // Eliminé la palabra function y agregé =>
    oldTabContent.addEventListener(
      "transitionend",
      () => {
        oldTabContent.className = "hidden";

        thisContent.className = "visible visuallyhidden";
        // Eliminé la palabra function y agregé =>
        setTimeout(() => {
          thisContent.classList.remove("visuallyhidden");
        }, 20);
      },
      { capture: false, once: true, passive: false }
    );
  }
})();
