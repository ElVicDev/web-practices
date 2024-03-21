(function () {
  "use strict";

  /* Oculta los submenus
    $('ul li ul').css("display", "none"); */

  /* Hay una forma más sencilla de ocultar los submenus:
    Es usando las funciones auxiliares integradas de jQuery
    Para este caso utilizaré la función auxiliar llamada: hide() */
  $("ul li ul").hide();

  /* Usar la palabra clave this para obtener el menu donde se hace click: */
  $(".menulink").click(function () {
    const thisMenu = $(this).next("ul");
    /* alert(thisMenu.html()); // Esta línea comprueba si la función sirve. */
  });

  /* Mostrar el menú oculto: */
  /* $('.menulink').click(function(){
        var thisMenu = $(this).next('ul');
        if(thisMenu.is(':visible')){	// La palabra is es un método de jQuery.
            thisMenu.hide();
        }
        else{
            thisMenu.show();
        }
    }); */

  /* Hay una manera más fácil y corta de mostrar el menú oculto en jQuery:
    Usando una función auxiliar integrada llamada toggle(). */
  $(".menulink").click(function () {
    var thisMenu = $(this).next("ul");

    // Usar el método not. Excluye un elemento en particular de una función.
    $("ul li ul").not(thisMenu).hide();
    thisMenu.toggle();
  });
})();
