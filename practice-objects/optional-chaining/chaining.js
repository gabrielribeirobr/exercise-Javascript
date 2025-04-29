// verificando uma propriedade inesistente dentro de um objeto

/* let user = {}

console.log(user.adress.street); */ // aqui ele retornará um erro

// para verificar uma propridade inesiste devemos utilizar o "if (?)"

let user = {}

console.log(user.adress ? user.adress.street : undefined); // funciona porém repete muitas vezes a propriedade "user.adress"