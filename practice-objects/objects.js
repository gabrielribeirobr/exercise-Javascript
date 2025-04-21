let prompt = require('prompt-sync')();

let user = {
    name: prompt('Digite seu nome: '),
    age: parseInt(prompt('digite sua idade: '))
};

if(user.age < 0 || isNaN(user.age)){
    console.log('insira uma idade valida')
    age: parseInt(prompt('digite novamente sua idade: '))
} else{
    console.log(`seu nome é : ${user.name}, e sua idade é: ${user.age} anos`);
}
    
        