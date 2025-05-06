const prompt = require('prompt-sync')();

let carros = ['toyota', 'honda', 'nissan', 'ford','bmw'];

console.log(carros[0]);
console.log(carros[1]);
console.log(carros[2]);
console.log(carros[3]);
console.log(carros[4]);

carros[3] = 'mazda';  // podemos substituí um elemento ao array

console.log('================');
console.log(carros[0]);
console.log(carros[1]);
console.log(carros[2]);
console.log(carros[3], '(troca de elementos)'); // agora substituí o elemento 3 por 'mazda' 
console.log(carros[4]);

// ou modelos incrementar um novo elemento ao array 

carros[5] = 'mitsubishi';

console.log('================');
console.log(carros[0]);
console.log(carros[1]);
console.log(carros[2]);
console.log(carros[3]); 
console.log(carros[4]);
console.log(carros[5], '(novo elemento ao array)'); // novo elemento 