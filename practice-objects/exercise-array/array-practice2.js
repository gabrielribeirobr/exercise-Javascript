// USO DO SPLICE NOS ARRAYS
const prompt = require('prompt-sync')();

let shoppingCart = [];

let ask = prompt('Deseja adicionar itens ao carrinho de compras? (sim/não): ');

const addItems = function(){
    for(let i=0; i<=shoppingCart.length; i++){
        shoppingCart[i] = prompt('Digite o nome do item à ser colocado no carrinho de compras: ');
        console.log(ask ? addItems() : console.log('OK!', 'Este é o carrinho de compras atual: ', shoppingCart));
    }
}

if(ask == 'sim'){
    addItems();
} else {
    console.log('OK!');
    console.log('Este é o carrinho de compras atual: ', shoppingCart);
}



