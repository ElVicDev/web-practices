# Especificaciones de la asignación: Bases de Datos de tablas múltiples (pistas)

Creará una copia de la base de datos "Música" que se trata en la lección. Completarás tu base de datos con pistas, artistas, álbumes y géneros diferentes a los utilizados en clase. Debe incluir tres artistas, cinco álbumes y 20 pistas en sus datos. Elige un género para cada pista. Sus tablas deben normalizarse como se describe en clase.
Luego debe construir y ejecutar algunas consultas en sus datos y luego tomar capturas de pantalla de esas consultas y enviar las capturas de pantalla como su tarea.

## Envío de su tarea
Para este trabajo entregará:
* Captura de pantalla (JPG o PNG) de datos en la tabla de TRACK
* Captura de pantalla (JPG o PNG) de todos los datos reunidos ordenados en orden ascendente por el título del álbum
* Captura de pantalla (JPG o PNG) de todos los géneros de un artista en particular. Sugerencia: use JOIN, DISTINCT y WHERE

## Calificación
Esta es una tarea relativamente simple. No quites puntos por pequeños errores. Si tus compañeros parecen haber hecho la tarea, dales todo el crédito. Siéntase libre de hacer sugerencias si hay pequeños errores. Por favor mantenga sus comentarios positivos y útiles. Si no toma en serio las calificaciones, los instructores pueden eliminar su respuesta y perderá puntos.

## Capturas de pantalla de muestra
 
 ![image-0](image-0.jpg)

![image-01](image-01.jpg)
 
![image-02](image-02.jpg)

## Desafíos opcionales
Esta sección es completamente opcional y está aquí en caso de que desee explorar un poco más a fondo y ampliar sus habilidades de código. No hay nada que entregar para este desafío.
Cree una consulta usando GROUP BY para mostrar la cantidad de pistas que tiene un artista en cada género. No es necesario que entregue una captura de pantalla de esta consulta.
 
![image-03](image-03.jpg)

## Nota sobre los recursos:
La sección 'Recursos' contiene enlaces a los capítulos del libro y el folleto del código SQL utilizado en la lección. Para esta semana, la sección 'Recursos' se puede encontrar en:
https://www.coursera.org/learn/intro-sql/resources/EUDlf


 # SOLUCIÓN

 ![image-04](image-04.jpg)

## CONSULTAS
~~~
SELECT * FROM `Track`
~~~

![image-05](image-05.jpg)
 
~~~
Select track.title, artist.name, album.title, genre.name
   from track join genre join album join artist on
   track.genre_id = genre.genre_id and 
   track.album_id = album.album_id and
   album.artist_id = artist.artist_id
ORDER BY album.title, artist.name, genre.name DESC, track.title
~~~

![image-06](image-06.jpg)

~~~
SELECT DISTINCT artist.name, genre.name FROM track
   JOIN album JOIN genre JOIN artist ON
   track.album_id = album.album_id and
   track.genre_id = genre.genre_id and
   album.artist_id = artist.artist_id WHERE
artist.name = 'Bon Jovi'
~~~

![image-07](image-07.jpg)

~~~
SELECT artist.name, genre.name, COUNT(track.track_id) FROM track
   JOIN album JOIN genre JOIN artist ON
   track.album_id = album.album_id and
   track.genre_id = genre.genre_id and
   album.artist_id = artist.artist_id
GROUP BY artist.name, genre.name
~~~

![image-08](image-08.jpg)


## OTRAS CONSULTAS

~~~
SELECT Album.title, Artist.name FROM Album JOIN Artist ON
 Album.artist_id = Artist.artist_id
~~~

![image-09](image-09.jpg)

~~~
SELECT Album.title, Album.artist_id, Artist.artist_id,Artist.name 
FROM Album JOIN Artist ON Album.artist_id = Artist.artist_id
~~~

![image-10](image-10.jpg)

~~~
SELECT Track.title, 
    Track.genre_id, 
    Genre.genre_id, 
    Genre.name 
FROM Track JOIN Genre
~~~

![image-11](image-11.jpg)

~~~
SELECT Track.title, Genre.name FROM Track JOIN Genre 
ON Track.genre_id = Genre.genre_id
~~~

![image-12](image-12.jpg)
