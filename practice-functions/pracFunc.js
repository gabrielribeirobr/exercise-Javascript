/* let sayHi = function(){
    console.log("hello world");
}

let func = sayHi;

func();  */

/* function ask(question, yes, no){
    if (confirm(question)) yes()

    else no()
}

function showOk(){
    alert("Voce concordou");
}

function showCancel(){
    alert("Voce discordou")
}

ask("Você concorda que o Vasco é o melhor time do Brasil?", showOk, showCancel); */

let nome = prompt("Qual seu nome?");

let showMessage = function(){
    alert(`Hello, ${nome}`)
}

showMessage();