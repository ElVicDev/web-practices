/*Datos de reserva de asiento
  Se agregó este objeto en la parte superior de este archivo de secuencia de comandos 
  del proyecto para proporcionar algunos datos iniciales de los asientos reservados 
  previamente, que podrían provenir de una base de datos. */
var reservedSeats = {
  record1: {
    seat: "b19",
    owner: {
      fname: "Joe",
      lname: "Smith",
    },
  },
  record2: {
    seat: "b20",
    owner: {
      fname: "Joe",
      lname: "Smith",
    },
  },
  record3: {
    seat: "b21",
    owner: {
      fname: "Joe",
      lname: "Smith",
    },
  },
  record4: {
    seat: "b22",
    owner: {
      fname: "Joe",
      lname: "Smith",
    },
  },
};

/* PARA LA CREACIÓN DE ASIETOS UTILIZAREMOS SWITCH QUE ES MAS COMPACTO. */

function makeRows(sectionLength, rowLength, placement) {
  const rows = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
  ];

  let html = "";
  let counter = 1;

  // Por cada fila.
  rows.forEach((row) => {
    // Si estoy en la sección izquierda, derecha o central, haz lo siguiente:
    switch (placement) {
      // Agregue la etiqueta div al lado izquierdo de la fila.
      case "left":
        html += `<div class="label"> ${row} </div>`;
        break;
      // Añade 12 al contador.
      case "right":
        counter = counter + (rowLength - sectionLength);
        break;
      // Añade 3 al contador.
      default:
        counter = counter + (rowLength - sectionLength) / 2;
    }
    // Recorre los asientos de esa sección.
    for (let i = 0; i < sectionLength; i++) {
      html += `<div class="a" id="${row + counter}">${counter}</div>`;
      counter++;
    }

    // Si estoy en la sección izquierda, derecha o central, haz lo siguiente:
    switch (placement) {
      // Añade 12 al contador.
      case "left":
        counter = counter + (rowLength - sectionLength);
        break;
      // Agrega la etiqueta al lado derecho de la fila.
      case "right":
        html += `<div class="label"> ${row} </div>`;
        break;
      // Añade 3 al contador.
      default:
        counter = counter + (rowLength - sectionLength) / 2;
    }
  });

  // Agregue el HTML a la página.
  document.getElementById(placement).innerHTML = html;
}

makeRows(3, 15, "left");
makeRows(3, 15, "right");
makeRows(9, 15, "middle");

(function () {
  "use strict";

  for (const key in reservedSeats) {
    /*Lidiando con la herencia prototípica
      Envuelva el núcleo del bucle for en esta declaración if. 
      Realmente no es un problema aquí, pero se considera una mejor práctica. */
    if (reservedSeats.hasOwnProperty(key)) {
      const obj = reservedSeats[key];
      // console.log(obj.seat);
      document.getElementById(obj.seat).className = "r";
      document.getElementById(obj.seat).innerHTML = "R";
    }
  }
})();
