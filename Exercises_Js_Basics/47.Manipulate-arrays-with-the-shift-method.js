// Manipular arreglos con el método shift

// pop() siempre elimina el último elemento de un arreglo. ¿Qué tal si quieres eliminar el primero?

// Ahí es donde entra .shift(). Funciona igual que .pop(), excepto que elimina el primer elemento en lugar del último.

// Ejemplo:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

// removedFromOurArray tendrá una cadena con valor Stimpson y ourArray tendrá ["J", ["cat"]].

// Utiliza la función .shift() para eliminar el primer elemento de myArray, y asigna el valor "desplazado" a un variable nuevo removedFromMyArray.

const myArray = [
  ["John", 23],
  ["dog", 3],
];
const removedFromMyArray = myArray.shift(["John", 23]);
