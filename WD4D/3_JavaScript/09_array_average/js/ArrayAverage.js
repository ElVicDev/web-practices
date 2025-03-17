var grades = [2, 5, , , 9, 8, , 8];
var sum = 0;
var count = 0;

if (grades.length > 0) {
  for (index = 0; index < grades.length; index++) {
    if (grades[index] != undefined) {
      sum += grades[index];
      count = count + 1; //También puedo colocarlo asi: count++;
    }
  }
  //¿Realmente queremos dividir por el tamaño de la matriz?
  document.writeln(sum / count);
} else document.writeln("Empty Array");
