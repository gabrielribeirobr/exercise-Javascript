let prompt = require('prompt-sync')();

/* function Calculator(){
    this.read = function(){
        this.a = +prompt('a? ');
        this.b = +prompt('b? ');
    };

    this.sum = function(){
        return this.a + this.b;
    };

    this.mul = function(){
        return this.a * this.b;
    }
};

let calculator = new Calculator();
calculator.read();

console.log('Soma=' + calculator.sum());
console.log('Multiplicacao=' + calculator.mul()); */


/* function Pessoa(){
    this.read = function(){
        this.name = prompt('Digite seu nome: ');
        this.age = +prompt('Digite sua idade: ');
    };

    this.show = function(){
        console.log('Nome: ' + this.name);
        console.log('Idade: ' + this.age);

    };
}

let pessoa1 = new Pessoa();
pessoa1.read();
pessoa1.show(); */

function ContaBancaria(){
    this.usuario = function(){
        this.titular = prompt('Digite o nome do titular da conta: ');
        this.saldo = +prompt('Digite o valor inicial da conta: ');
    }

    this.mostrarSaldo = function(){
        console.log('==========================');
        console.log('Titular da conta: ' + this.titular);
        console.log('Saldo da conta: R$'+ this.saldo);
        console.log('==========================');
    }

    this.depositar = function(){
        let deposito = +prompt('Digite o valor à ser depositado: ');
        this.saldo += deposito;
        console.log('==========================');
        console.log('Deposito realizado com sucesso!')
        console.log('==========================');
    };

    this.sacar = function(){
        let valor = +prompt('Digite o valor a ser sacado: ');
        if(valor > this.saldo){
            console.log('Saldo insuficiente!')
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado com sucesso.`)
        }
    }
}


let banco = new ContaBancaria();
banco.usuario();
banco.mostrarSaldo();
banco.depositar();
banco.sacar();
banco.mostrarSaldo();