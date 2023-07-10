// Palabra en blanco

// Se te proporcionan oraciones con algunas palabras faltantes, como sustantivos, verbos, adjetivos y adverbios. Luego, completa las piezas que faltan con palabras de tu elección de una manera que la oración completa tenga sentido.

// Considera esta frase:

// It was really ____, and we ____ ourselves ____.

// A esta frase le faltan tres piezas: un adjetivo, un verbo y un adverbio, y podemos añadir las palabras que queramos para completarla. A continuación, podemos asignar la frase completa a una variable de la siguiente manera:

const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";

// En este reto, te proporcionamos un sustantivo, un verbo, un adjetivo y un adverbio. Tienes que formar una frase completa utilizando palabras de tu elección, junto con las palabras que te proporcionamos.

// Debes utilizar el operador de concatenación de cadenas + para construir una nueva cadena, utilizando las variables proporcionadas: myNoun, myAdjective, myVerb, y myAdverb. A continuación, asigna la cadena formada a la variable wordBlanks. No debes cambiar las palabras asignadas a las variables.

// También tendrás que tener en cuenta los espacios en tu cadena, de modo que la frase final tenga espacios entre todas las palabras. El resultado debe ser una frase completa.

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = myNoun + " " +  myVerb + " " + myAdjective + " " +  myAdverb + " "; 