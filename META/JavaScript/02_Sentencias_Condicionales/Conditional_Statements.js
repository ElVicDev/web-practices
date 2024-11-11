// if else

var result = 50;

if(result > 40) {
    console.log('You passed the test')
} else {
    console.log('You did not pass the test')
}

// -----------------------------------------

// if, else if, else

var place = "first";

if(place == 'first') {
    console.log('Gold')
} else if (place == 'second') {
    console.log('Silver')
} else if (place == 'third') {
    console.log('Bronze')
} else {
    console.log('No medal')
}

// -----------------------------------------

// switch statement

var place = 'fourth'

switch(place) {
    case 'first':
        console.log('Gold');
        break;
    case 'Second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
}

// -----------------------------------------

/* Ejercicio: Practicar enunciados condicionales
Complete los siguientes pasos para crear: ¿Tiene usted edad suficiente? 
    1. Declare una variable edad utilizando la palabra clave var
       y fíjela en el número 10.
    2. Añada una sentencia if que compruebe si el valor
       de la variable age es mayor o igual que el número 65.
       Dentro del bloque if, console.log la sentencia
       "Obtiene sus ingresos de su pensión".
    3. Añada un bloque "else if", en el que comprobará
       si el valor de la edad es menor que 65 y mayor o igual que 18.
       Dentro de este bloque "else if", escriba "console.log"
       y a continuación "Cada mes recibe un salario".
    4. Añada otro bloque "else if", y esta vez compruebe
       si el valor de la edad es inferior a 18 años.
       Dentro del bloque "else if", "escriba console.log"
       y luego "Recibes un subsidio".
    5. Añada una sentencia "else" para capturar cualquier otro valor.
       Dentro del bloque, escriba "console.log"
       y luego "El valor de la variable edad no es numérico".
Intente ajustar la edad y ejecute el programa para ver cómo afecta a la salida.
*/

var edad = 'diez';

if(edad >= 65) {
    console.log('Obtiene sus ingresos de su pensión')
} else if (edad < 65 && edad >= 18) {
    console.log('Cada mes recibe un salario')
} else if (edad < 18) {
    console.log('Recibes un subsidio')
} else {
    console.log('El valor de la variable edad no es numérico')
}

// -----------------------------------------

/* Codifique el programa de los días de la semana como una sentencia switch
    1. En la línea siguiente, defina una nueva variable,
       nómbrela day, y ajuste su valor a "Sunday".
    2. Comience a codificar una sentencia switch,
       pasando la variable day como la expresión a evaluar.
    3. Dentro de switch, añada casos para cada día de la semana,
       empezando por 'lunes', y terminando por 'domingo'.
       Asegúrese de utilizar valores de cadena para los días.
       Dentro de cada caso, por ahora,
       sólo añada un console.log('Haga algo'),
       y añada un break; en la línea inferior.
    4. En la parte inferior de la sentencia switch,
       añada el caso por defecto y añada un console.log('No existe tal día').
    5. Por último, actualice las llamadas console.log para cada caso,
       en función de la actividad que tenga en cada uno de los días.
*/

var day = "lunes"

switch (day) {
  case "Monday":
    console.log("Study HTML");
    break;
  case "Tuesday":
    console.log("Study CSS");
    break;
  case "Wednesday":
    console.log("Study JavaScript");
    break;
  case "Thursday":
    console.log("Study Node");
    break;
  case "Friday":
    console.log("Study Phyton");
    break;
  case "Saturday":
    console.log("Study Bootstrap");
    break;
  case "Sunday":
    console.log("Study React & Angular");
    break;
  default:
    console.log("No existe tal día");
}
