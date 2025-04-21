let prompt = require('prompt-sync')();

let user = {
    name: prompt('Digite seu nome: ')
};

let age;

do{
    age = parseInt(prompt('Qual é a sua idade? '));
    if(isNaN (age) || age < 0 ){
        console.log('Insira uma idade válida.');
    }
} while (isNaN(age) || age < 0);

user.age = age;
console.log(`Seu nome é ${user.name} e sua idade é ${user.age} anos`);
        