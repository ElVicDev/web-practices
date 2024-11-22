// * -------------
// * El método map
// * -------------

/*  Este método se utiliza para mapear cada elemento del 
    array sobre el elemento de otro array, basándose en 
    cualquier trabajo que se realice dentro de la función
    que se pasa al mapa como parámetro.  */

const result = [0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
});
console.log(result);
