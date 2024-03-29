/*  ESTE CODIGO FUNCIONA CORRECTAMENTE PERO SE PUEDE MEJORAR USANDO EL ARCHIVO 
    script2.js */

(function () {
  "use strict";

  const tabs = document.querySelectorAll("#tabs > ul > li > a");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i], addEventListener("click", selectTab);
  }

  function selectTab(event) {
    event.preventDefault();

    /*  Elimina el atributo 'Class' activo */
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].removeAttribute("class");
    }
    /*  Al hacer click en otra pestaña se mostrará como activo */
    event.target.className = "active";

    /*  Las siguientes dos líneas nos dirán cuál es la nueva pestaña 
      en la que hizo clic el usuario. */
    const thisTab = event.target.getAttribute("href");
    const thisContent = document.querySelector(thisTab);

    /*  Las segundas dos líneas ocultan la pestaña anterior 
      aplicando la clase visualmente oculta. Debido a la transición 
      en el div para la opacidad, se desvanece en 200 milisegundos.*/
    const oldTabContent = document.querySelector(".visible");
    oldTabContent.className = "visuallyhidden";

    /*  Agregamos un detector de eventos al contenido de la pestaña anterior 
      que se activa cuando se completa la transición. */
    oldTabContent.addEventListener(
      "transitionend",
      function () {
        oldTabContent.className = "hidden";

        /*  El contenido que va con la pestaña en la que se hizo clic,
        recibe dos clases. El primero lo configura para mostrar: bloque,
        pero el segundo establece la opacidad en cero. */
        thisContent.className = "visible visuallyhidden";
        setTimeout(function () {
          thisContent.classList.remove("visuallyhidden");
        }, 20);
      },
      { capture: false, once: true, passive: false }
    );
  }
})();
