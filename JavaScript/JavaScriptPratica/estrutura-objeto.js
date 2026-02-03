const estudante = {
    nome: 'Rafael',
    idade: 19,
    cpf: '15829477534',
    turma: 'JavaScript'
}

/* console.log(estudante.nome);
console.log(`O nome do estudante é ${estudante.nome}`);
console.log(`Os três primeiros digitos do cpf é ${estudante.cpf.substring(0, 3)}`); */

function exibeInfoEstudantes(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

console.log(estudante['nome']);
console.log(estudante['cpf']);

console.log(exibeInfoEstudantes(estudante, 'nome'));
console.log(exibeInfoEstudantes(estudante, 'cpf'));

