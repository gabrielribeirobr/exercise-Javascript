let tarefas = ['lavar louças', 'Estudar javascript', 'Fazer exercicios', 'Limpar o quarto', 'Comprar pão'];

tarefas.forEach(function(tarefa){
    console.log(tarefa);
});
console.log('=========================================')

tarefas.push('Estudar Inglês');
console.log('Tarefa adicionada');

console.log('=========================================')

tarefas.forEach(function(tarefa){
    console.log(tarefa);
});
