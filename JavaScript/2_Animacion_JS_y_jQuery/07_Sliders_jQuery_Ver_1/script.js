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
      counter = 0;
    }

    leftPosition = `-${counter * imageWidth}px`;
    $("#slider ul").animate({ left: leftPosition }, 700, "easeInQuad");
  });

  $("#previous").click(function () {
    counter--;

    if (counter < 0) {
      counter = imageCount - 1;
    }

    leftPosition = `-${counter * imageWidth}px`;
    $("#slider ul").animate({ left: leftPosition }, 700, "easeInQuad");
  });
});
