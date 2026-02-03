const alunoReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return 'Aprovado';
    } else {
        return 'Reprovado';
    }
}

//arrow function ( => ) pode ser usado sem o uso de chaves ( {} ) ou returns se for apenas uma linhas

const exibeNome = (nome) => nome;

console.log(alunoReprovou(6, 5));
console.log(alunoReprovou(10, 2));
console.log(exibeNome('Rafael'));