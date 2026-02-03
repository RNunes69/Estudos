const estaAprovado = true;

if (estaAprovado === true) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}

if (0 == false) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}
aprovacao = estaAprovado ? 'Aprovado' : 'Reprovado';

console.log(aprovacao);

// == comparavoler independente de ser numero, bool ou string
// === compara extritamente igual, mesmas coisa e objeto