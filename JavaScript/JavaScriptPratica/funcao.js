// parametros / argumentos
// retornos

function exibeInfoEstudante(nome, nota) {
    console.log(`O nome do aluno e ${nome} e a nota foi ${nota}`);
}
exibeInfoEstudante('Rafael', 6);
exibeInfoEstudante('Rafaella', 10);

function exibeNomeEstudante(nome) {
    return(nome);
}
console.log((exibeNomeEstudante('Rafael')));

// hoistng funcao sao lidas primeiras que tudo no codigo, a nao ser que estaja em uma variavel, ou uma arrow function =>