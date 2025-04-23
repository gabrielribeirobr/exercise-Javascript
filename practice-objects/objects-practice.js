let prompt = require('prompt-sync')();


const brands = {
    nissan: 'nissan',
    toyota: 'toyota',
    honda: 'honda'
}

function checkBrands() {
    const result = prompt('Digite a marcas de carro que possui (exemplo: nissan, toyota, honda): ')
    if( result in brands){
        brands.car = result;
        console.log(car);
        modelo();
    } console.log('Digite uma das marcas como exemplo')
}
checkBrands()

const car = {
    
}


/* modelo = () => {
    if(carro.marca == 'nissan' || carro.marca == 'toyota' || carro.marca == 'honda' ){
        modelo = prompt('Informe o modelo do carro: ')
        carro.modelo = modelo;

    }
}



modelo(); */
