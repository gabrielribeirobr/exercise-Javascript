// USO DO SPLICE NOS ARRAYS
const prompt = require('prompt-sync')();

let shoppingCart = [];

let ask = prompt('Deseja adicionar itens ao carrinho de compras? (sim/não): ').toLowerCase();

function addItem(){
    let item = prompt('Digite o nome do item a ser colocado no carrinho de compras: ');
    shoppingCart.push(item);
    ask = prompt('Deseja adicionar mais itens? (sim/não): ').toLowerCase();
}
while(ask == 'sim'){
    addItem();
}

if(ask == 'nao' && shoppingCart.length == 0){
     console.log('Carrinho vazio!')
} else{
    console.log('\nItens no carrinho:');
    console.log(shoppingCart);
}

shoppingCart.length > 0 ? ask = prompt('Deseja remover algum item do carrinho? ') : console.log('Adeus');




