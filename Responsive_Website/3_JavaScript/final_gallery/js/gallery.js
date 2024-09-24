/*
 *		Este archivo contiene el código javascript para nuestra galería.
 */

/* 	Variables para todas las plantillas, de modo que solo tengamos que 
	compilarlas una vez al cargar la página y luego podamos usar las 
	mismas plantillas compiladas muchas veces. */
var albums_template, photos_template, photo_template, slideshow_template;

// Variables para almacenar el álbum y la foto mostrados actualmente.
var current_album = gallery.albums[0];
var current_photo = current_album.photos[0];

/* 	Una función auxiliar que crea una plantilla y muestra los 
	resultados en el contenido div. */
function showTemplate(template, data) {
  var html = template(data);
  $("#content").html(html);
}

/* 	La lectura del documento se llama cuando se carga todo el documento, 
	por lo que colocamos aquí la mayor parte del código que necesita ejecutarse. */
$(document).ready(function () {
  /* Recopila todas nuestras plantillas listas para usar. */
  var source = $("#albums-template").html();
  albums_template = Handlebars.compile(source);

  source = $("#photos-template").html();
  photos_template = Handlebars.compile(source);

  source = $("#photo-template").html();
  photo_template = Handlebars.compile(source);

  source = $("#slideshow-template").html();
  slideshow_template = Handlebars.compile(source);

  /* 	Al hacer clic en la pestaña de álbumes se muestran las miniaturas 
		de todos los álbumes. */
  $("#albums-tab").click(function () {
    // Muestra la plantilla de álbumes.
    showTemplate(albums_template, gallery);

    /* 	Primero haga que la pestaña de álbumes sea la activa 
			y luego desactive la pestaña actualmente activa. */
    $(".nav-tabs .active").removeClass("active");
    // Luego, activa la pestaña de álbumes.
    $("#albums-tab").addClass("active");

    /* 	Agregue una devolución de llamada de clic a cada miniatura de 
		álbum que muestre la plantilla de fotos en ese álbum 
		(he escrito el código para esta función para mayor claridad, 
		pero en realidad es prácticamente lo mismo que la función de 
		la pestaña de fotos, por lo que podríamos simplemente 
		llamar a $(".photo-thumbnail").click() ). */
    $(".album-thumbnail").click(function () {
      /* 	Obtiene el índice (posición en la matriz) del álbum en el que 
			hicimos clic. "this" es el elemento en el que se hizo clic. 
			data("id") obtiene el atributo data-id (que establecemos en 
			el índice del álbum en la matriz - @index). */
      var index = $(this).data("id");

      // Establezca el álbum actual en este álbum.
      current_album = gallery.albums[index];

      // Muestra la plantilla de fotos.
      showTemplate(photos_template, current_album);

      /* 	Agregue un clic en todas las miniaturas de fotos que muestra 
				la foto en una ventana emergente modal. */
      $(".photo-thumbnail").click(function () {
        /* 	Obtiene el índice (posición en la matriz) de la foto en la que hicimos clic. 
			"this" es el elemento en el que se hizo clic. 
			data("id") obtiene el atributo data-id 
			(que establecemos en el índice de la foto en la matriz - @index) */
        var index = $(this).data("id");

        // Establezca la foto actual en esta foto.
        current_photo = current_album.photos[index];

        // Muestra la plantilla de fotografía única.
        showTemplate(photo_template, current_photo);
      });
    });
  });

  /* 	Al hacer clic en la pestaña de fotos se muestran 
		todas las fotos del álbum actual. */
  $("#photos-tab").click(function () {
    // Muestra la plantilla de fotos.
    showTemplate(photos_template, current_album);

    /* 	Primero haga que la pestaña de fotos sea la activa 
			y luego desactive la pestaña actualmente activa. */
    $(".nav-tabs .active").removeClass("active");
    // Luego, activa la pestaña de fotos.
    $("#photos-tab").addClass("active");

    /* 	Agregue un clic en todas las miniaturas de fotos que 
			muestra la foto en una ventana emergente modal. */
    $(".photo-thumbnail").click(function () {
      /* Obtiene el índice (posición en la matriz) de la foto en la que hicimos clic. 
		"this" es el elemento en el que se hizo clic. 
		data("id") obtiene el atributo data-id 
		(que establecemos en el índice de la foto en la matriz - @index). */
      var index = $(this).data("id");

      // Establezca la foto actual en esta foto.
      current_photo = current_album.photos[index];

      // Muestra la plantilla de fotografía única.
      showTemplate(photo_template, current_photo);
    });
  });

  /* 	Al hacer clic en la pestaña de presentación de diapositivas, 
		se muestra el álbum actual como una presentación de diapositivas. */
  $("#slideshow-tab").click(function () {
    // Muestra la plantilla de presentación de diapositivas utilizando el álbum actual.
    showTemplate(slideshow_template, current_album);

    /* 	Primero haga que la pestaña de presentación de diapositivas 
			sea la activa y luego desactive la pestaña actualmente activa. */
    $(".nav-tabs .active").removeClass("active");
    // then make slideshow tab active
    $("#slideshow-tab").addClass("active");
  });

  /* 	Para iniciar la página debemos mostrar la vista de álbumes, 
		para ello debemos hacer clic virtualmente en la pestaña de álbumes. */
  $("#albums-tab").click();
});
