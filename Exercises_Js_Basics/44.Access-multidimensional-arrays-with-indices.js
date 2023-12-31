// Accede a arreglos multidimensionales con índices

// Se puede pensar que un arreglo multidimensional es como un arreglo de arreglos. Cuando usas corchetes para acceder a un arreglo, el primer par de corchetes hace referencia a los elementos del arreglo más externo (el primer nivel), y cada par adicional va haciendo referencia a un nivel más interno.

// Ejemplo

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

// const subarray = arr[3];

// const nestedSubarray = arr[3][0];

// const element = arr[3][0][1];

// En este ejemplo, subarray tiene el valor [[10, 11, 12], 13, 14], nestedSubarray tiene el valor [10, 11, 12], y element tiene el valor 11.

// Nota: No debe haber ningún espacio entre el nombre del arreglo y los corchetes, ni array [0][0] o array [0] [0] están permitidos. Aunque JavaScript pueda procesar esto correctamente, puedes confundir a otros programadores al leer tu código.

// Usa la notación de corchetes para seleccionar un elemento de myArray de tal manera que myData sea igual a 8.

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
