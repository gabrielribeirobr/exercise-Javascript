// USO DO SPLICE NOS ARRAYS
const prompt = require('prompt-sync')();

let shoppingCart = [];

let ask = prompt('Deseja adicionar itens ao carrinho de compras? (sim/não): ').toLowerCase();

function addItem() {
    let item = prompt('Digite o nome do item a ser colocado no carrinho de compras: ');
    shoppingCart.push(item);
    ask = prompt('Deseja adicionar mais itens? (sim/não): ').toLowerCase();
}

while (ask === 'sim') {
    addItem();
}

if (shoppingCart.length === 0) {
    console.log('Carrinho vazio!');
} else {
    console.log('\nItens no carrinho:');
    console.log(shoppingCart);
}

shoppingCart.length > 0
    ? ask = prompt('Deseja remover algum item do carrinho? (sim/nao): ').toLowerCase()
    : console.log('Adeus');

function removeItem() {
    console.clear();
    console.log('\nItens no carrinho:');
    shoppingCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });

    let itemToRemove = prompt('\nDigite o nome exato do item que deseja remover: ');

    let indexToRemove = shoppingCart.findIndex(
        item => item.toLowerCase() === itemToRemove.toLowerCase()
    );

    if (indexToRemove !== -1) {
        shoppingCart.splice(indexToRemove, 1);
        console.log(`"${itemToRemove}" foi removido do carrinho.`);
    } else {
        console.log(`Item "${itemToRemove}" não encontrado no carrinho.`);
        removeItem();
    }

    
    console.log('\nCarrinho atualizado:');
    console.log(shoppingCart);
''}

if (ask === 'sim') {
    removeItem();
} else {
    console.log('carrinho com produtos finais: ')
    shoppingCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}





