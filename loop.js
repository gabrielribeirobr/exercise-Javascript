
document.getElementById('btn').addEventListener('click', calcularIdadeCachorro);




function calcularIdadeCachorro(){

  let idadeHumano = parseInt(document.getElementById('code').value);
  let resultadoDiv = document.getElementById('resultado');

  if(idadeHumano <= 0 || isNaN(idadeHumano) ){
    resultadoDiv.innerHTML = 'Insira uma idade válida!';

    return;
  }

  let idadeCachorro = idadeHumano * 7;

  resultadoDiv.innerHTML = `Seu cachorro teria ${idadeCachorro} anos em idade canina!`;
}

calcularIdadeCachorro();