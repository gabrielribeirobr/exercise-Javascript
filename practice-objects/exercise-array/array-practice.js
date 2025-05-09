let tarefas = ['lavar louças', 'Estudar javascript', 'Fazer exercicios', 'Limpar o quarto', 'Comprar pão'];

function mostrarTarefas(lista){
    lista.forEach(tarefa => console.log(tarefa));
}

mostrarTarefas(tarefas);
console.log('=========================================')

tarefas.push('Estudar Inglês', 'Nadar', 'Jogar'); // adiciona mais uma tarefa ao array
console.log('Tarefa adicionada');

console.log('=========================================')

mostrarTarefas(tarefas);

console.log('=========================================')
tarefas.pop() 
console.log('Tarefa removida');
console.log('=========================================')

mostrarTarefas(tarefas);

console.log('=========================================') 
const fiveLetters = tarefas.filter(tarefa => tarefa.length >= 5 ); // mostra apenas tarefas que contem cinco ou mais letras
console.log(fiveLetters);

console.log('=========================================') 
const nomesMaiusculos = tarefas.map(function(tarefa){ // define todas as tarefas com letras maiúsculas
    return tarefa.toUpperCase();
});

console.log(nomesMaiusculos);
console.log('=========================================') 
