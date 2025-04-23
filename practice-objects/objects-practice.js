let prompt = require('prompt-sync')();

const carro = {
    marca: prompt('Digite a marca do seu carro (exemplo: nissan, toyota, honda): '),

}

modelo = () => {
    if(carro.marca == 'nissan'){
        modelo = prompt('Informe o modelo do carro: ')
        carro.modelo = modelo;
        console.log(`A marca do seu carro é ${carro.marca} e o modelo é ${carro.modelo}`);

    }
}

modelo();

console.log(carro);