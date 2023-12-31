// Introducción a las sentencias "Else"

// Cuando la condición en una sentencia if es verdadera, se ejecutará el bloque de código que va a continuación. ¿Qué sucede cuando la condición es falsa? Normalmente no debería ocurrir nada. Con la sentencia else, se puede ejecutar un bloque alternativo de código.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}

// Combina la sentencia if en una sola sentencia if/else.

function testElse(val) {
  let result = "";
  // Cambia solo el código debajo de esta línea

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Cambia solo el código encima de esta línea
  return result;
}

testElse(4);
