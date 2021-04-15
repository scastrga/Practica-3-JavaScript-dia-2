// Crear un array con 5 números

// Muestra por consola un array con los numeros pares usando las funcion filter

// Muestra por consola un array con true si el elemento es par o false si no es par con la funcion map

var arrayNum = [1,2,3,4,5];
console.log(arrayNum);

var paresFilter = arrayNum.filter(function(num){
  return num % 2 == 0;
});

console.log(paresFilter);

var paresMap = arrayNum.map(function(num){
  return num % 2 == 0;
});

console.log(paresMap);

