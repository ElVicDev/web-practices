// Tarea 1: crear un generador de mensajes de registro de consola basado en funciones
function consoleStyler(color, background, fontSize, txt) {
  var message = "%c" + txt;
  var style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;
  console.log(message, style);
}

// Tarea 2: crear otro generador de mensajes de registro de consola.
function celebrateStyler(reason) {
  var fontStyle = "color: tomato; font-size: 50px";
  if (reason == "birthday") {
    console.log(`%cHappy birthday`, fontStyle);
  } else if (reason == "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else {
    console.log(message, style);
  }
}

// Tarea 3: ejecutar las funciones consoleStyler y celebrarStyler
consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
celebrateStyler("birthday");

// Tarea 4: Insertar un mensaje personalizado y de felicitación
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}

// Call styleAndCelebrate
styleAndCelebrate("ef7c8e", "fae8e0", "30px", "You made it!", "champions");
