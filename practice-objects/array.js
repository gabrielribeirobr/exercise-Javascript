const prompt = require('prompt-sync')();

let carros = ['toyota', 'honda', 'nissan', 'ford','bmw'];

console.log(carros[0], carros[1],carros[2],carros[3], carros[4]);


carros[3] = 'mazda';  // podemos substituí um elemento ao array

/* console.log('================');
console.log(carros[0], carros[1],carros[2],carros[3],  '(troca de elementos)', carros[4]); */ // agora substituí o elemento 3 por 'mazda' console.log(carros[4]);

// ou modelos incrementar um novo elemento ao array

carros[5] = 'mitsubishi';

/* console.log('================');
console.log(carros[0]);
console.log(carros[1]);
console.log(carros[2]);
console.log(carros[3]);
console.log(carros[4]);
console.log(carros[5], '(novo elemento ao array)'); // novo elemento
console.log('================');
 */
console.log('números de elementos no array = ',carros.length); //contagem de elementos ao array

console.log(carros); // mostrando o array inteiro

console.log(carros.at(-1), '(ultimo elemento do array)'); // para obter o último elemtno do array

console.log(carros.pop()); 
console.log(carros); // .pop mostra o último valor do array e o remove

