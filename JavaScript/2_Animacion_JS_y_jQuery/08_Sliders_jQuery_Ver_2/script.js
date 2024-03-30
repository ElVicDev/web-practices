/*  Utilice el método jQuery .on() y mueva el código para que esté dentro 
    de la función de devolución de llamada anónima. Este método ejecutará 
    la función de devolución de llamada cuando se hayan cargado todas las 
    imágenes. También actúa como cierre, por lo que se puede agregar la 
    directiva "uso estricto". */
$(window).on("load", function () {
  "use strict";

  const imageCount = $("#slider ul li").length;
  const imageWidth = $("#slider ul li img").first().width();
  const totalWidth = imageWidth * imageCount + "px";
  // alert(totalWidth);

  let leftPosition = 0;
  let counter = 0;

  $("#slider ul").css("width", totalWidth);

  $("#next").click(function () {
    counter++;

    if (counter == imageCount) {
      /* Clonando la lista desordenada */
      $("#slider ul").clone().appendTo("#slider");
      $("#slider ul")
        .last()
        .css("left", imageWidth + "px");
      /* Configuración de la posición izquierda */
      leftPosition = `-${totalWidth}`;
      /*  Animar ambas tiras de diapositivas y 
          agregar una función de devolución de llamada*/
      $("#slider ul").last().animate({ left: 0 }, 700, "easeInQuad");
      $("#slider ul")
        .first()
        .animate({ left: leftPosition }, 700, "easeInQuad", function () {
          $("#slider ul").first().remove();
        });
      /* Establezca el contador en 0 */
      counter = 0;
    } else {
      leftPosition = `-${counter * imageWidth}px`;
      $("#slider ul").animate({ left: leftPosition }, 700, "easeInQuad");
    }
  });

  $("#previous").click(function () {
    counter--;

    if (counter < 0) {
      counter = imageCount - 1;
      /* Clonando la lista desordenada */
      $("#slider ul").clone().appendTo("#slider");
      $("#slider ul").last().css("left", `-${totalWidth}`);
      /* Configuración de la posición izquierda */
      leftPosition = `-${counter * imageWidth}px`;
      /*  Animar ambas tiras de diapositivas y 
          agregar una función de devolución de llamada*/
      $("#slider ul").last().animate({ left: leftPosition }, 700, "easeInQuad");
      $("#slider ul")
        .first()
        .animate({ left: imageWidth + "px" }, 700, "easeInQuad", function () {
          $("#slider ul").first().remove();
        });
    } else {
      leftPosition = `-${counter * imageWidth}px`;
      $("#slider ul").animate({ left: leftPosition }, 700, "easeInQuad");
    }
  });
});
