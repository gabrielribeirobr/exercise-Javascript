let prompt = require('prompt-sync')();


const brands = {
    nissan: 'nissan',
    toyota: 'toyota',
    honda: 'honda'
}
const car = {
    
}

function checkBrands() {
    const result = prompt('Digite a marcas de carro que possui (exemplo: nissan, toyota, honda): ')
    if( result in brands){
        car.brand = result;
        carModel(); 
    } else {console.log('Digite uma das marcas como exemplo')
        checkBrands();
        }
}
checkBrands()

function carModel(){
    const model = prompt('Qual o modelo do seu carro?: ')
    car.model = model;
    carAge();
}

function carAge(){
    const age = prompt('Qual o ano do seu carro? ')
    car.age = age;
    console.log(car);    
}

const rmBrand = prompt('Deseja remover uma marca, modelo ou ano? ')
if(rmBrand == 'marca ' || rmBrand == 'modelo' || rmBrand == 'ano'){
    this.result = rmBrand

    
} 



