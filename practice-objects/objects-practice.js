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
        console.log(car);
        // modelo(); ainda por criar
    } console.log('Digite uma das marcas como exemplo')
}
checkBrands()




/* modelo = () => {
    if(carro.marca == 'nissan' || carro.marca == 'toyota' || carro.marca == 'honda' ){
        modelo = prompt('Informe o modelo do carro: ')
        carro.modelo = modelo;

    }
}



modelo(); */
