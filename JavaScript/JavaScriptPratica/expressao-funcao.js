const alunoReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return 'Aprovado';
    } else {
        return 'Reprovado';
    }
}

console.log(alunoReprovou(6, 5));
console.log(alunoReprovou(10, 2));