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


function Pessoa(){
    this.read = function(){
        this.name = prompt('Digite seu nome ');
        this.age = +prompt('Digite sua idade');
    };

    function read(){
        return console.log(Pessoa);
    };
}

let pessoa1 = pessoa();
read.Pessoa();
